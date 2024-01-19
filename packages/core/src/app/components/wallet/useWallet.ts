import { useContext } from "react";
import StateContext from "./state";

const useWallet = () => {
  const { setWalletModalOpen, setMobileMenuOpen } = useContext(StateContext);

  return { setWalletModalOpen, setMobileMenuOpen };
};

export default useWallet;
