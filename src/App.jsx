import "./App.css";
import Contact from "./components/contact";
import Information from "./components/information";
import { MessageProvider } from "./components/message/message-context";
import ProjectsList from "./components/projects-list";
import Separation from "./components/separation";
import SkillsList from "./components/skills-list";
import Body from "./page/body";
import Footer from "./page/footer";
import Header from "./page/header";

function App() {
    return (
        <MessageProvider>
            <Header />
            <Body>
                <Information />
                <ProjectsList />
                <SkillsList />
            </Body>
            <Separation>
                <Contact />
            </Separation>
            <Footer />
        </MessageProvider>
    );
}

export default App;
