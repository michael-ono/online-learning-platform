import faSuccess from '../../assets/2fa-success.png';

const SettingsModalContents = () => {
  return (
    <div className='flex mx-auto justify-center'>
      <div className='pb-4'>
        <h2 className='font-bold text-2xl'>2FA enabled succesfully</h2>
        <img src={faSuccess} className='w-[180px] h-[200px] mx-auto mt-3' alt="faSuccess" />
      </div>
    </div>
  )
}

export default SettingsModalContents;