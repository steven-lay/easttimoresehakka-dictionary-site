import { useRouter } from 'next/router'
import Dropdown from './Dropdown'

export default function LearnDropdown() {
  const router = useRouter()

  const heading = 'Guide'
  const items = [
    { title: 'Pronunciation', action: () => router.push('/pronunciation') },
    { title: 'Tones', action: () => router.push('/tones') },
  ]

  return <Dropdown heading={heading} items={items} />
}
