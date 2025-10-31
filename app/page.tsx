import { WalletConnect } from "@/components/Wallet-connect";
import Will from "@/components/Will";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <WalletConnect />
    <div>
     <Will />
    </div>
   </div>
  );
}
