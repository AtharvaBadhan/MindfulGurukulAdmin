import './App.css';
import LoginPage from './LoginPage';
import DashboardPage from './Dashboard/DashboardPage';
import Registeredusers from './User Management/Registeredusers';
import Splash from './Content Management/Splash';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import BlockUsers from './User Management/BlockUsers';
import InactiveUsers from './User Management/InactiveUsers';
import DeleteUsers from './User Management/DeleteUsers';
import ActiveUsers from './User Management/ActiveUsers';
import AdminManagementPage from './Admin Management/AdminManagementPage';
import EditAccess from './Admin Management/EditAccess';
import Mindfulness from './Content Management/Mindfulness';
import TestManagementPage from './Content Management/TestManagementPage'
import PrivacyPolicyPage from './Settings/PrivacyPolicyPage';
import BadgesPage from './Content Management/BadgesPage';
import AddSubscription from './Subscription Settings/AddSubscription';
import SubscriptionUserList from './Subscription Settings/SubscriptionUserList';
import PersonalInformationPage from './Settings/PersonalInformationPage';
import MyActivityPage from './Settings/MyActivityPage';
import TermsAndCondition from './Settings/TermsAndCondition';
import Referral from './Settings/Referral';
import NoiseSetting from './Settings/NoiseSetting';
import HeartRateVariation from './Settings/HeartRateVariation';
import BackgroundSoundMaster from './Content Management/BackgroundSoundMaster';
import NotificationMaster from './Global Settings/NotificationMaster';
import StudyPatternMaster from './Global Settings/StudyPatternMaster';
import Ecommerce from './Global Settings/Ecommerce';
import RewardsSetting from './Global Settings/RewardsSetting';
import Downloads from './Downloads/Downloads';

function App() {
  return (
    <Routes>
      <Route index element={
        <main>
          <LoginPage />
        </main>
      } />
      <Route path={'/DashboardPage'} element={
        <main>
          <Header />
          <DashboardPage />
        </main>
      } />
      <Route path={'/LoginPage'} element={
        <main>
          <LoginPage />
        </main>
      } />

      <Route path={'/Registeredusers'} element={
        <main>
          <Header />
          <Registeredusers />

        </main>
      } />
      <Route path={'/BlockUsers'} element={
        <main>
          <Header />
          <BlockUsers />
        </main>
      } />
      <Route path={'/ActiveUsers'} element={
        <main>
          <Header />
          <ActiveUsers />
        </main>
      } />
      <Route path={'/InactiveUsers'} element={
        <main>
          <Header />
          <InactiveUsers />
        </main>
      } />
      <Route path={'/DeleteUsers'} element={
        <main>
          <Header />
          <DeleteUsers />
        </main>
      } />
      <Route path={'/AdminManagementPage'} element={
        <main>
          <Header />
          <AdminManagementPage />
        </main>
      } />
      <Route path={'/EditAccess'} element={
        <main>
          <Header />
          <EditAccess />
        </main>
      } />
      <Route path={'/Mindfulness'} element={
        <main>
          <Header />
          <Mindfulness />
        </main>
      } />
      <Route path={'/TestManagementPage'} element={
        <main>
          <Header />
          <TestManagementPage />
        </main>
      } />
      <Route path={'/Splash'} element={
        <main>
          <Header />
          <Splash />
        </main>
      } />
      <Route path={'/BadgesPage'} element={
        <main>
          <Header />
          <BadgesPage />
        </main>
      } />
      <Route path={'/AddSubscription'} element={
        <main>
          <Header />
          <AddSubscription />
        </main>
      } />
      <Route path={'/SubscriptionUserList'} element={
        <main>
          <Header />
          <SubscriptionUserList />
        </main>
      } />
      <Route path={'/PersonalInformationPage'} element={
        <main>
          <Header />
          <PersonalInformationPage />
        </main>
      } />
      <Route path={'/MyActivityPage'} element={
        <main>
          <Header />
          <MyActivityPage />
        </main>
      } />
      <Route path={'/PrivacyPolicyPage'} element={
        <main>
          <Header />
          <PrivacyPolicyPage />
        </main>
      } />
      <Route path={'/TermsAndCondition'} element={
        <main>
          <Header />
          <TermsAndCondition />
        </main>
      } />
      <Route path={'/Referral'} element={
        <main>
          <Header />
          <Referral />
        </main>
      } />
      <Route path={'/NoiseSetting'} element={
        <main>
          <Header />
          <NoiseSetting />
        </main>
      } />
      <Route path={'/HeartRateVariation'} element={
        <main>
          <Header />
          <HeartRateVariation />
        </main>
      } />
      <Route path={'/BackgroundSoundMaster'} element={
        <main>
          <Header />
          <BackgroundSoundMaster />
        </main>
      } />
      <Route path={'/NotificationMaster'} element={
        <main>
          <Header />
          <NotificationMaster />
        </main>
      } />
      <Route path={'/StudyPatternMaster'} element={
        <main>
          <Header />
          <StudyPatternMaster />
        </main>
      } />
      <Route path={'/Ecommerce'} element={
        <main>
          <Header />
          <Ecommerce />
        </main>
      } />
      <Route path={'/RewardsSetting'} element={
        <main>
          <Header />
          <RewardsSetting />
        </main>
      } />
      <Route path={'/Downloads'} element={
        <main>
          <Header />
          <Downloads />
        </main>
      } />
    </Routes>


  );
}
export default App;
