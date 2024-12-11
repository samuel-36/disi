interface ContainerProps{
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ( {children} ) => {
    return ( <div
    className="
    max-w-[1920px]
    mx-auto
    md:px-2
    px-4
    xl:px-20
    "
    >
        {children}
    </div> );
}
 
export default Container;