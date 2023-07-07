import { LucideProps, UserPlus } from 'lucide-react'
import Image from 'next/image'

export const Icons = {
  Logo: (props: LucideProps) => (
    <Image
      src="/images/QuickChat_logo_2.png"
      height={props.size as number}
      width={props.size as number}
      alt="QuickChat Logo"
    />
  ),
  LogoAlt: (props: LucideProps) => (
    <Image
      src="/images/QuickChat_logo.png"
      height={props.size as number}
      width={props.size as number}
      alt="QuickChat Logo"
    />
  ),
  UserPlus
}

export type Icon = keyof typeof Icons