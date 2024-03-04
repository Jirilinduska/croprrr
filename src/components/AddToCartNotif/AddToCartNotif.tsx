

interface AddToCartNotifProps {
    itemTitle: string
    notifMessage: string,
    bgColor: string,
    currentState: boolean
}

const AddToCartNotif: React.FC<AddToCartNotifProps> = ( { itemTitle, notifMessage, bgColor, currentState } ) => {

  return (
    <div 
        className={`${ currentState 
            ? 'fixed top-20 left-0 w-full h-16 flex items-center justify-center p-1 z-[500]'
            : 'fixed top-[-100%] w-full h-16 flex items-center justify-center'
        }`}
        style={ {backgroundColor: bgColor} }
    >

        <p className="text-primary text-center text-xs sm:text-sm md:text-lg">
            <strong className="text-secondary">{itemTitle}</strong>
            {notifMessage}
        </p>

    </div>
  )
}

export default AddToCartNotif