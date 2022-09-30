import { BodyEnd, BodyMiddle, BodyStart, Container, Footer, ImgEnd, ImgStart } from "./styled";

const Body = () => {
    return (
        <Container>
            <BodyStart>
                <h1>
                    Designed for the future
                </h1>
                <ImgStart>
                    <img 
                        src="./images/illustration-editor-mobile.svg" 
                        alt="illustration-editor-mobile" 
                    />
                </ImgStart>
                <h2>
                    Introducing an extensible editor
                </h2>
                <p>
                    Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                    The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                    videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                    change the looks of a blog.
                </p>
                <h2>
                    Robust content management
                </h2>
                <p>
                    Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                    by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
                </p>
            </BodyStart>
            <BodyMiddle>
                <img 
                 src="./images/illustration-phones.svg" 
                 alt="illustration-phones" 
                />
                <h1>
                    State of the Art Infrastructure
                </h1>
                <p>
                    With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                    This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                </p>
            </BodyMiddle>
            <BodyEnd>
                <ImgEnd>
                    <img 
                        src="./images/illustration-laptop-mobile.svg" 
                        alt="illustration-editor-mobile" 
                    />
                </ImgEnd>
                <h1>
                    Free, open, simple
                </h1>
                <p>
                    Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                    features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                    and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                </p>
                <h1>
                 Powerful tooling
                </h1>
                <p>
                    Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                    capable of producing even the most complicated sites.
                </p>
            </BodyEnd>
            <Footer>
                <h1>Blogr</h1>
                <div>
                    <h1>Product</h1>
                    <p>Overview</p>
                    <p>Pricing</p>
                    <p>Marketplace</p>
                    <p>Features</p>
                    <p>Integrations</p>
                </div>
                <div>
                    <h1>Company</h1>
                    <p>About</p>
                    <p>Team</p>
                    <p>Blog</p>
                    <p>Careers</p>
                </div>
                <div>
                    <h1>Connect</h1>
                    <p>Contact</p>
                    <p>Newletter</p>
                    <p>LinkedIn</p>
                </div>
            </Footer>
        </Container>
    )
};


export default Body;