import Reaact from 'react';
  import { FaArrowLeft } from "react-icons/fa";
  import { useNavigate } from 'react-router-dom';
function ListingPage1(){
    let navigate=useNavigate();
    return(
<div className='w-[100%] h-[100vh] bg-white flex items-center justify-center relative overflow-auto'>
<form className="max-w-[900px] w-[90%] h-[550px] flex items-center justify-start flex-col gap-[10px] border-black md:items-start overflow-auto mt-[50px]">
<div className='w-[50px] h-[50px] bg-[red] absolute top-[5%] left-[20px] rounded-[50%] flex items-center justify-center' onClick={() => navigate("/")}>
 <FaArrowLeft className="w-[25px] h-[30px] text-[white]"/></div>
<div className='w-[200px] h-[50px] text-[20px] bg-[#f14242] text-[white] rounded-[30px] flex items-center justify-center absolute top-[5%] right-[10px] shadow-lg'>
set your home</div>

 <div className='w-[90%] flex items-start justify-start flex-col gap-[10px]'>
   <label htmlFor="title" className='text-[20px] text-[black]'>Title:</label>
   <input required type="text" id="title" className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg px-[20px]' />
</div>

<div className='w-[90%] flex items-start justify-start flex-col gap-[10px]'>
 <label htmlFor="description" className='text-[20px] text-[black]'>Description:</label>
 <textarea id='des' required type="text" className='w-[90%] h-[100px] py-[10px] border-[2px] border-[#555656] rounded-lg px-[20px]'></textarea>
</div>

<div className='w-[90%] flex items-start justify-start flex-col gap-[10px]'>
   <label htmlFor="image1" className='text-[20px] text-[black]'>Image 1:</label>
   <div className='flex items-center justify-start w-[90%] h-[40px] border-[#555656] border-2 rounded-[10px] '>
   <input required type="file" id="image1" className='w-[1000%] text-[15px] px-[10px] ' />
   </div>
</div>

<div className='w-[90%] flex items-start justify-start flex-col gap-[10px]'>
   <label htmlFor="image2" className='text-[20px] text-[black]'>Image 2:</label>
   <div className='flex items-center justify-start w-[90%] h-[40px] border-[#555656] border-2 rounded-[10px] '>
   <input required type="file" id="image2" className='w-[1000%] text-[15px] px-[10px] ' />
   </div>
</div>

<div className='w-[90%] flex items-start justify-start flex-col gap-[10px]'>
   <label htmlFor="image3" className='text-[20px] text-[black]'>Image 3:</label>
   <div className='flex items-center justify-start w-[90%] h-[40px] border-[#555656] border-2 rounded-[10px] '>
   <input required type="file" id="image3" className='w-[1000%] text-[15px] px-[10px] ' />
   </div>
</div>

<div className='w-[90%] flex items-start justify-start flex-col gap-[10px]'>
   <label htmlFor="rent" className='text-[20px] text-[black]'>Rent:</label>
   <input required type="text" id="rent" className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg px-[20px]' />
</div>

<div className='w-[90%] flex items-start justify-start flex-col gap-[10px]'>
   <label htmlFor="city" className='text-[20px] text-[black]'>City:</label>
   <input required type="text" id="city" className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg px-[20px]' />
</div>

<div className='w-[90%] flex items-start justify-start flex-col gap-[10px]'>
   <label htmlFor="landmark" className='text-[20px] text-[black]'>Landmark:</label>
   <input required type="text" id="landmark" className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg px-[20px]' />
</div>
 <button className='px-[50px] py-[10px] bg-[red] text-[white] rounded-lg hover:bg-[#005999] md:px[100px] '>
 Next
</button>
</form>

        </div>
    )
}
export default ListingPage1