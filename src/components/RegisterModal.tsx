import { getUserInfo } from "../utils/credentialsHelper";
import facade from "../utils/ApiFacade";
import { useState } from "react";

interface Props {
  addingPlayer: boolean;
  setAddingPlayer: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegisterModal: React.FC<Props> = ({ addingPlayer, setAddingPlayer }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const player = {
      username: getUserInfo().username,
      name: name,
      phone: phone,
      email: email,
      status: status,
    };
    await facade.addPlayer(player);
    setAddingPlayer(false);
  };

  return (
    <div
      className={`modal fixed flex flex-wrap align-middle top-0 bottom-0 left-0 right-0 bg-black/50 justify-center z-10 ${
        !addingPlayer && `hidden`
      }`}
    >
      <div className="modal-content bg-gray-900 w-1/4 h-fit my-auto rounded-2xl">
        <div className="modal-header p-3">
          <h4 className="mb-2 text-2xl text-center">Add player</h4>
        </div>
        <div className="modal-body px-3 pt-1 pb-5 border-t border-b border-gray-500 bg-gray-800 shadow-[inset_0_0_10px_2px_rgb(0,0,0)]">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col gap-4"
          >
            <div className="form-group flex flex-row gap-4">
              <div className="flex flex-col">
                <label htmlFor="username">
                  Name<span style={{ color: "red" }}> *</span>
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="name"
                  placeholder="name"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password">
                  Phone<span style={{ color: "red" }}> *</span>
                </label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  id="phone"
                  placeholder="phone"
                  required
                />
              </div>
            </div>
            <div className="form-group flex flex-row gap-4">
              <div className="flex flex-col">
                <label htmlFor="email">
                  Email<span style={{ color: "red" }}> *</span>
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="confirmPassword">
                  Status<span style={{ color: "red" }}> *</span>
                </label>
                <input
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  type="text"
                  id="status"
                  placeholder="status"
                  required
                />
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer p-3 flex">
          <div className="modalslogan flex-grow flex h-5 my-auto"></div>
          <div className="flex gap-2">
            <button
              className="btn btn-orange"
              onClick={() => setAddingPlayer(false)}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-confirm">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
