import {motion} from "framer-motion"
import {closeSpring} from "../mini-components/Animations"


export const Modal = ({selected, setSelected}) => {
  if(selected === null) {
    return <></>
  }
  return(
    <div className="fixed inset-0 bg-black/50 z-50 cursor-pointer "
    onClick={() => {setSelected(null)}}>

      <motion.div className="w-full rounded-[20px]  lg:h-[600px] flex justify-center items-center mt-20 flex-col  max-w-[800px] mx-auto  mb-10 cursor-default overflow-y-scroll hide-scrollbar overflow-x-hidden  "
      transition={closeSpring}
      layoutId={`card-${selected.id}`}
      onClick={e => {e.stopPropagation()}}>
        <img src={selected.image}  className="rounded-t-[20px] lg:h-[800px]"></img>
        <div className="bg-[#1A1E24] rounded-b-[30px] px-10 py-4">
          <h1 className="font-Inter font-bold text-4xl">{selected.title}</h1>
          <p className="font-Inter mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec mauris leo. Aliquam a euismod mauris, a sollicitudin justo. Sed ac quam ligula. Maecenas semper turpis elit, ut vestibulum libero pretium eu. Maecenas id mi eget velit maximus posuere sed in augue. Curabitur est mauris, pretium eu malesuada et, imperdiet non est. Fusce sit amet nulla non libero consequat hendrerit. Nulla facilisi. Phasellus at volutpat justo. Duis at lectus id arcu aliquet pellentesque. </p>
        </div>
      </motion.div>

    </div>
  )
}