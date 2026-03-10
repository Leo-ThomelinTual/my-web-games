import Input from "@/app/components/MmoType/Common/UI/Input";
import ResourceDesplay from "@/app/components/MmoType/Common/UI/ResourceDesplay";
import AutoFarm from "@/app/components/MmoType/Desktop/AutoFarm";
import QuickAction from "@/app/components/MmoType/Desktop/QuickAction";

const MmoType = () => {
  return (
    <>
      <main className="w-full h-screen">
        <section className="absolute right-0 m-2 flex flex-row-reverse flex-wrap gap-1">
          <ResourceDesplay
            ResourceName="Pierre"
            ResourceStock={3}
            ResourceIcon=""
          />
          <ResourceDesplay
            ResourceName="Berry"
            ResourceStock={3}
            ResourceIcon=""
          />
          <ResourceDesplay
            ResourceName="Bois"
            ResourceStock={3}
            ResourceIcon=""
          />
        </section>
        <section className="absolute right-2 top-[3em] flex flex-row gap-1">
          <AutoFarm />
        </section>
        <section
          id="inventory"
          className="group absolute right-20 top-[60%] hidden translate-y-[-50%]"
        >
          <QuickAction />
        </section>

        <Input />
      </main>
    </>
  );
};

export default MmoType;
