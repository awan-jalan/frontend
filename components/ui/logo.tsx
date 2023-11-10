import Link from 'next/link'
import Logos from "@/public/images/A-grotech.png"
export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="A-GroTech">
      <img src={Logos.src} className="w-8 h-8"  alt="logo"/>
        {/*<img src="../../public/images/agrotech-logo.svg" alt="aaaa"/>*/}
      {/*<svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">*/}
      {/*  <LogoBasah/>*/}
      {/*</svg>*/}
    </Link>
  )
}
