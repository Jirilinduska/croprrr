
import { IoIosArrowBack } from "react-icons/io";
import { IoIosMan } from "react-icons/io"
import { IoIosWoman } from "react-icons/io";


interface ShopFilterProps {
    showFilter: boolean,
    handleCloseFilter: () => void,
    handleGender: (selectedGender: string) => void,
    activeGender: string,
    type: string,
    handleType: (oneCategory: string) => void
}

const ShopFilter: React.FC<ShopFilterProps> = ( { showFilter, handleCloseFilter, handleGender, activeGender, type, handleType } ) => {

    const categories = ['Shoes', 'Shirts', 'Hoodies', 'Accessories']

  return (
    <div 
        className={`fixed top-[60px] left-0 bg-primary h-full ${showFilter ? 'w-[100%] sm:w-[80%] md:w-[50%] xl:w-[30%]' : 'hidden'}`}
    >

        <div className="absolute right-0 top-0 h-full w-10 cursor-pointer bg-secondary text-primary flex items-center justify-center text-x"
            onClick={handleCloseFilter}
        >
            {showFilter && <IoIosArrowBack onClick={handleCloseFilter}/> }
        </div>

        {/* FILTER BTNS */}

        <p className="text-center mr-10 mb-5 pt-5">Select gender</p>

        <div className="flex flex-col items-center justify-center gap-4 mb-14">

            <button className={`flex gap-2 items-center justify-center w-[60%] h-10 text-center mr-10 border-2 border-gray rounded-full
                ${ activeGender === 'Men' && 'bg-main-default'} 
                sm:w-[40%]`}
                onClick={ () => handleGender('Men') }
            >
                Men <IoIosMan />
            </button>
            
            <button className={`flex gap-2 items-center justify-center w-[60%] h-10 text-center mr-10 border-2 border-gray rounded-full
                    ${ activeGender === 'Women' && 'bg-main-default'} 
                    sm:w-[40%]`}
                    onClick={ () => handleGender('Women') }
            >
                Women <IoIosWoman />
            </button>

        </div>

        <p className="mb-5 text-center mr-10">Select category</p>

        <div className="flex flex-col items-center justify-center gap-5">

            {categories.map( ( oneCategory ) => {
                return <button 
                            className={`flex gap-2 items-center justify-center w-[60%] h-10 text-center mr-10 border-2 border-gray rounded-full 
                            ${ type === oneCategory && 'bg-main-default'} 
                            sm:w-[40%]`}
                            onClick={ () => {
                                handleType(oneCategory)
                                handleCloseFilter()
                            }}
                        >
                            {oneCategory}
                        </button>
            })}

        </div>

    </div>
  )
}

export default ShopFilter