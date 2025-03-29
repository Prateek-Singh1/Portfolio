import React, { useEffect, useRef, useState, useCallback } from "react";
import { useGet } from "../../api/apiService";
import { API_URLS } from "../../config/apiUrls";

const InfiniteScrolling: React.FC = () => {
  const [pokemon, setPokemon] = useState<
    { name: string; image: string; id: number }[]
  >([]);
  const [offset, setOffset] = useState(0);
  const limit = 15;
  const observerRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const url = `${API_URLS.POKEMON_LIST}?limit=${limit}&offset=${offset}`;
  const { data } = useGet(url);

  const fetchPokemon = useCallback(async () => {
    if (loading || !hasMore) return; // ✅ Prevents multiple calls
    setLoading(true);

    try {
      if (!data.results || data.results.length === 0) {
        console.warn("No more Pokémon found, stopping further requests.");
        setHasMore(false);
        return;
      }

      const newPokemon = data.results.map((result: any, index: number) => ({
        name: result.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          offset + index + 1
        }.png`,
        id: offset + index + 1,
      }));

      setPokemon((prev) => [...prev, ...newPokemon]);

      if (data.results.length < limit) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    } finally {
      setLoading(false); // ✅ Ensure loading is set to false
    }
  }, [offset, hasMore, data]); // ✅ Only depends on offset and hasMore

  // Fetch new Pokémon when offset updates
  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setOffset((prev) => prev + limit);
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [hasMore, loading]); // ✅ Stable dependencies

  return (
    <section className="bg-white dark:bg-[#131313] p-5 flex flex-col gap-5 customScrollBar overflow-hidden items-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemon.map((poke, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] shadow-md h-full border-[#E7E7E7] dark:bg-[#181818] border-2 dark:border-[#383737] rounded-xl group relative cursor-pointer"
          >
            <img
              width="250px"
              className="duration-300 group-hover:-translate-y-8"
              src={poke.image}
              alt={poke.name}
            />
            <p className="w-full text-center text-[16px] font-semibold text-[#321a50] dark:text-white mb-5">
              {poke.name}
            </p>
            <div className="h-2 w-full bg-gradient-to-l group-hover:via-[var(--primary-color)] group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
            <div className="h-0.5 group-hover:w-full bg-gradient-to-l group-hover:via-[var(--primary-color)] w-[70%] m-auto rounded transition-all absolute bottom-[-1px] left-0"></div>
          </div>
        ))}
      </div>
      <div ref={observerRef} className="h-10 flex justify-center items-center">
        {loading && <p>Loading more Pokémon...</p>}
        {!hasMore && <p>No more Pokémon to load</p>}
      </div>
    </section>
  );
};

export default InfiniteScrolling;
