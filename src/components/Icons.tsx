import { LucideProps, UserPlus } from 'lucide-react'
import Image from 'next/image'

export const Icons = {
  Logo: (props: LucideProps) => (
    <Image
      src="/images/QuickChat_logo_2.png"
      height={200}
      width={200}
      alt="QuickChat Logo"
  />
  ),
  LogoAlt: (props: LucideProps) => (
    <Image
      src="/images/QuickChat_logo.png"
      height={40}
      width={40}
      alt="QuickChat Logo"
  />
  ),
  UserPlus
}

export type Icon = keyof typeof Icons