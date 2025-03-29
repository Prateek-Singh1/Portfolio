interface PageHeadingProps {
  heading: string;
  subHeading: string;
}

export const PageHeadings: React.FunctionComponent<PageHeadingProps> = ({
  heading = "Blogs",
  subHeading = "Creations",
}) => {
  return (
    <div>
      <p className="home-sub-title">{heading}</p>
      <div className="page-heading-title text-[#321a50] dark:text-white">
        <div>
          {subHeading}
        </div>
      </div>
    </div>
  );
};