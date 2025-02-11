import ProfileImageUrl from '../../assets/profile-image.png';

const ProfileImage = () => {
  return (
    <div className="mx-auto h-[125px] w-[125px]">
      <img
        src={ProfileImageUrl}
        alt="Profile Image"
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default ProfileImage;
