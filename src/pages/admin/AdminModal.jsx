import { Fragment, useContext, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ModalContext } from "../../contexts/AdminAccessContext";
import AdminAccessibility from "./AdminAccessibility";
import { functions } from "../../firebaseConfig";
import { httpsCallable } from "firebase/functions";
import { toast } from "react-toastify";
import { BtnLoadingAnimation } from "../../components/LoadingAnimation";

export default function AdminModal() {
  const { isOpen, setIsOpen } = useContext(ModalContext);
  const [adminEmail, setAdminEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const addAdminRole = httpsCallable(functions, "addAdminRole");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    addAdminRole({ email: adminEmail })
      .then((result) => {
        toast.success(result.data.message);
        setIsOpen(false);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error adding admin role:", error);
      });
  };
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setIsOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-custom bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-custom text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-secondary px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-custom"
                      >
                        Admin Access
                      </Dialog.Title>
                      <div className="mt-2">
                        <AdminAccessibility setAdminEmail={setAdminEmail} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-secondary px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    disabled={true}
                    className="inline-flex w-full justify-center bg-custom rounded-md hover:cursor-not-allowed px-3 py-2 text-sm font-semibold text-white shadow-sm  sm:ml-3 sm:w-auto"
                  >
                    {isLoading ? <BtnLoadingAnimation /> : "Commit"}
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setIsOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
