// see: https://www.npmjs.com/package/react-pro-sidebar
import './App.css';
import ChatApp from './components/chatApp/Component';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { ContainerLayout, SidebarLayout, ContentLayout, Logo } from './components/Layout/';
import { FaInfo, FaBookOpen, FaDatabase, FaYoutube, FaGithub, FaLinkedin, FaBrush, FaCode } from "react-icons/fa";
import AeroAssist from './applications/AeroAssist';
import GrammarGenius from './applications/GrammarGenius';
import KidsDigest from './applications/KidsDigest';
import CSVify from './applications/CSVify';
import Emojibot from './applications/Emojibot';
import TimeComplexity from './applications/TimeComplexity';
import CodeExplainer from './applications/CodeExplainer';
import KeyWords from './applications/KeyWords';
import ProductNameGenerator from './applications/ProductNameGenerator';
import PythonDebugger from './applications/PythonDebugger';
import SpreadsheetGenerator from './applications/SpreadsheetGenerator';
import TweetClassifier from './applications/TweetClassifier';
import Mood2CSSColor from './applications/Mood2CSSColor';
import VRFitness from './applications/VRFitness';
import SarcasticChat from './applications/SarcasticChat';
import TurnByTurnDirections from './applications/TurnByTurnDirections';
import InterviewQuestions from './applications/InterviewQuestions';
import FunctionCreator from './applications/FunctionCreator';
import CodeImprovement from './applications/CodeImprovement';
import SinglePageWebapp from './applications/SinglePageWebapp';
import RapBattle from './applications/RapBattle';
import MemoWriter from './applications/MemoWriter';
import Emojibot4 from './applications/Emojibot4';
import English2French from './applications/English2French';
import SocraticTutor from './applications/SocraticTutor';
import SqlTranslator from './applications/SqlTranslator';

const currentYear = new Date().getFullYear();

const App = () => {
  return (
    <div className='App'>
      <h1 className='app-title'>OpenAI Code Samples</h1>
      <ContainerLayout>
        <SidebarLayout>
          <div style={{ display: 'flex',
                        height: '100%',
                        minHeight: '400px'
                      }}>
            <Sidebar backgroundColor='#1d5268'>
              <Menu menuItemStyles={{
                      button: ({ level, active, disabled }) => {
                          // only apply styles on first level elements of the tree
                          if (level === 0)
                            return {
                              color: disabled ? 'gray' : 'lightgray',
                              backgroundColor: active ? '#eecef9' : undefined,
                            };
                        },
                      }}
              >
                <a href='https://openai.com/' target='_blank'>
                  <img src='../public/OpenAI_Logo.png' alt='OpenAI Logo' className='app-logo' style={{ position: 'absolute', top: 0, left: 0 }} />
                </a>
                <h5 className='sample-applications'>Sample Applications</h5>
                <SubMenu defaultOpen label="Assistants" icon={<FaBookOpen />}>
                  <MenuItem>Grammar Genius</MenuItem>
                  <MenuItem>Aero Assist</MenuItem>
                  <MenuItem>Kids Digest</MenuItem>
                  <MenuItem>Personal Navigator</MenuItem>
                  <MenuItem>Interview Assistant</MenuItem>
                  <MenuItem>Memo Writer</MenuItem>
                  <MenuItem>French Translator</MenuItem>
                </SubMenu>
                <SubMenu label='Fun' icon={<FaBrush />}>
                  <MenuItem>Rap Battle</MenuItem>
                  <MenuItem>Emoji Bot</MenuItem>
                  <MenuItem>Tweet Classifier</MenuItem>
                  <MenuItem>Keyword Generator</MenuItem>
                  <MenuItem>Sarcastic Chatbot</MenuItem>
                  <MenuItem>Socratic Tutor</MenuItem>
                </SubMenu>
                <SubMenu label='Data' icon={<FaDatabase />}>
                  <MenuItem>CSVify</MenuItem>
                  <MenuItem>Spreadsheet Generator</MenuItem>
                </SubMenu>
                <SubMenu label='Coding' icon={<FaCode />}>
                  <MenuItem>Function Creator</MenuItem>
                  <MenuItem>Time Complexity</MenuItem>
                  <MenuItem>Code Explainer</MenuItem>
                  <MenuItem>Python Debugger</MenuItem>
                  <MenuItem>SQL Translator</MenuItem>
                </SubMenu>
                <h5>More</h5>
                <MenuItem icon={<FaInfo />}>About Me</MenuItem>
                <MenuItem icon={<FaLinkedin />}>LinkedIn</MenuItem>
                <MenuItem icon={<FaYoutube />}>YouTube video</MenuItem>
                <MenuItem icon={<FaGithub />}>GitHub</MenuItem>
              </Menu>
              {/* <a href='https://www.youtube.com/@FullStackWithLawrence' target="_blank">
                <Logo alt="Logo" />
              </a> */}
            </Sidebar>
          </div>
        </SidebarLayout>
        <ContentLayout>
          <ChatApp {...SqlTranslator} />
        </ContentLayout>
      </ContainerLayout>
      <div className='footer'>
          <p>© {currentYear} Lawrence McDaniel | <img src='openai-logo.svg' /> OpenAI Python API | <img src='../public/react-logo.svg' /> React | <img src='../public/aws-logo.svg' /> Amazon Web Services | <img src='terraform-logo.svg' /> Terraform | <img src='../public/github-logo.svg' /> <a href='https://github.com/FullStackWithLawrence/aws-openai' target='_blank'>Source code</a></p>
        </div>
    </div>
  )
}

export default App;
