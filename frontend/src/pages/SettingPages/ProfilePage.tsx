import NavbarUser from "../../components/navbar/NavbarUser";
import AboutSettingsForm from "../../components/form/ProfileSettings/AboutSettingsForm";

const ProfilePage: React.FC = () => {
  return (
    <>
      <NavbarUser />
      <AboutSettingsForm />
    </>
  );
};

export default ProfilePage;
