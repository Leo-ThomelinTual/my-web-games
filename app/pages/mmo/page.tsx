import Input from "@/app/components/MmoType/Common/UI/Input";
import ResourceDesplay from "@/app/components/MmoType/Common/UI/ResourceDesplay";
import AutoFarm from "@/app/components/MmoType/Desktop/AutoFarm";
import QuickAction from "@/app/components/MmoType/Desktop/QuickAction";

const MmoType = () => {
  return (
    <>
      <main className="w-full h-screen">
        <AutoFarm />
        <Input />
        <ResourceDesplay
          ResourceName="Test"
          ResourceStock={3}
          ResourceIcon=""
        ></ResourceDesplay>
        <QuickAction />
      </main>
    </>
  );
};

export default MmoType;
