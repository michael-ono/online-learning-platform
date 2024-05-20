import { useState } from "react";
import { HiPencil } from "react-icons/hi";
import Layout from "../shared/Layout";
import PadlockIcon from "../assets/password-lock.png";
import SettingsInput from "../shared/SettingsInput";
import { CardHeader } from "@material-tailwind/react";
import toast, { Toaster } from 'react-hot-toast';
import SettingsModal from "../components/settingsModal";

const UserSettings = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [firstName, setuserName] = useState();
  const [lastName, setTrack] = useState();
  const [email, setEmail] = useState();
  const [userValue, setUserValue] = useState("");
  const [trackValue, setTrackValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleOptionChange = (e) => {
    console.log(e.target.name, e.target.checked);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  const handleChange = (event) => {
    if (isEditing) {
      const { name, value } = event.target;
      switch (name) {
        case 'firstName':
          setUserValue(value);
          break;
        case 'lastName':
          setTrackValue(value);
          break;
        case 'email':
          setEmailValue(value);
          break;
        case 'password':
          setPasswordValue(value);
          break;
        default:
          break;
      }
    }
  };

  return (
    <Layout>
      <Toaster />
      <SettingsModal isShown={modalOpen} onClose={closeModal} />
      <div className="container h-full">
        <CardHeader variant="gradient" color="gray" className="mb-1 ml-0 p-3 mt-3">
          <h2 className="text-[1.8rem] font-bold">Settings</h2>
          <p className="text-gray-400 text-[0.8rem] tracking-wide">View and manage your settings</p>
        </CardHeader>
        <div className="mx-auto px-4 h-screen bg-blue-gray-50">
          <div>
              <div className="pt-4 mb-5">
                <h3 className="text-xl font-bold mb-4">User Information</h3>
                <div className="flex flex-wrap">
                  <SettingsInput labelName="First Name" type="text" name="firstName" placeholder="Tech" value={userValue} onChange={handleChange} disabled={!isEditing} />
                  <SettingsInput labelName="Last Name" type="text" name="lastName" placeholder="Supreme" value={trackValue} onChange={handleChange} disabled={!isEditing} />
                  <SettingsInput labelName="Email" type="email" name="email" placeholder="techsupreme@gmail" value={emailValue} onChange={handleChange} disabled={!isEditing}/>
                  <SettingsInput labelName="Password" type="password" name="password" placeholder="********" value={passwordValue} onChange={handleChange} disabled={!isEditing}/>
                  <button className="bg-[#000] hover:bg-[#323030] flex text-white text-[0.7rem] font-bold py-1.5 px-2.5 rounded-md" onClick={() => setIsEditing(!isEditing)}>
                    <span className="mr-1">
                      {isEditing && <HiPencil className="h-[1rem] w-[0.75rem]" />}
                    </span>
                    {isEditing ? "Save" : "Edit"}
                  </button>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col">
                  <div>
                    <h3 className="text-xl font-bold mb-4 mt-2">Application Settings</h3>
                    <label className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        name="newLaunches"
                        onChange={handleOptionChange}
                        className="mr-2 cursor-pointer"
                      />
                      <span>Make user visible</span>
                    </label>
                    <label className="flex items-center mb-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="dailyTasks"
                        onChange={handleOptionChange}
                        className="mr-2 cursor-pointer"
                      />
                      <span>Daily course reminder</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="newMemberAlert"
                        onChange={handleOptionChange}
                        className="mr-2 cursor-pointer"
                      />
                      <span>Review course after submisson</span>
                    </label>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">Account Settings</h3>
                    <label className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        name="notifyTasks"
                        onChange={handleOptionChange}
                        className="mr-2 cursor-pointer"
                      />
                      <span>Reset timeline</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="notifyReview"
                        onChange={handleOptionChange}
                        className="mr-2 cursor-pointer"
                      />
                      <span>Delete account</span>
                    </label>
                    <button className="bg-[#000] hover:bg-[#323030] flex text-white text-[0.75rem] mt-3 font-bold py-1.5 px-2.5 rounded-md" onClick={() => toast.success('Saved')}>
                        Save
                    </button>
                  </div>
                </div>
                  <div className="mx-auto my-auto">
                    <h2 className="text-xl font-bold mb-4 tex">Extra Security</h2>
                    <img src={PadlockIcon} className="w-[140px] h-[100px] cursor-pointer" alt="" />
                    <button className="flex items-center mx-auto mt-2 justify-center py-[0.3rem] px-[0.8rem] md:py-[0.4rem] md:px-7 text-[0.8rem] font-semibold text-white bg-black rounded-md shadow-md hover:bg-[#6abeda] hover:text-black"  onClick={() => setModalOpen(true)}>Enable 2FA</button>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UserSettings;