import ProfileCard from './ProfileCard';
import profiles from "../assets/members.json"

export default function Members() {
  return (
    <div className='h-screen'>
      <h1 className='text-center text-5xl text-blue-400 font-bold pb-6'>People of Note</h1>
      <div id="members" className="flex flex-wrap place-content-evenly gap-4 pb-6">
        {profiles.map(profile => (
          <ProfileCard
            pic={profile.image}
            name={profile.name}
            job={profile.role}
            voicePart={profile.voicePart}
            semestersInNoteworthy={profile.semestersInNoteworthy}
            major={profile.major}
          />
        ))}
      </div>
    </div>
  );
}
