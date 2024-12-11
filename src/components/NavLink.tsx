type propsType={
  link: string;
  title: string;
}

export default function NavLink(props: propsType) {
  return (
    <a 
      href={props.link} 
      className="py-4 pl-20 hover:bg-white hover:text-[#171717]">
       {props.title}
    </a>
  )
}