'use client'

import { useRouter } from 'next/navigation'

interface SimpleRedirectButtonProps {
  label: string
  route: string
}

const SimpleRedirectButton: React.FC<SimpleRedirectButtonProps> = ({ label, route }) => {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push(route)}
      
    >
      {label}
    </button>
  )
}

export default SimpleRedirectButton
