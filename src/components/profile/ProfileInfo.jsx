import { useProfile } from "../../hooks/useProfile";
import Bio from "./Bio";
import ProfileImage from "./ProfileImage";

const ProfileInfo = () => {
  const { state } = useProfile();
  return (
    <div>
      <div class="flex flex-col items-center py-8 text-center">
        {/* <!-- profile image --> */}
        <div class="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
          <ProfileImage />
        </div>
        <div className="mt-12">
          <h3 class="text-2xl font-semibold text-white lg:text-[28px]">
            {state?.user?.firstName} {state?.user?.lastName}
          </h3>
          <p class="leading-[231%] lg:text-lg py-1">{state?.user?.email}</p>
        </div>

        {/* <!-- bio --> */}
        <Bio />
        <div class="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
      </div>
    </div>
  );
};

export default ProfileInfo;
