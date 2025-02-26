// import { PageHeaderAlphabetHighlighter } from "../../assets/svg/svg"

interface PageHeadingProps {
    heading: string;
    subHeading: string;
}

export const PageHeadings: React.FunctionComponent<PageHeadingProps> = ({ heading = 'Blogs', subHeading = 'Creations' }) => {
    return (
        <div>
            <p className='home-sub-title'>{heading}</p>
            <div className='page-heading-title'>
                <div>
                    {subHeading}
                    {/* <PageHeaderAlphabetHighlighter /> */}
                </div>
            </div>
        </div>
    )
}