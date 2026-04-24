import React from 'react'
import { motion } from 'framer-motion'

interface ProfileImageProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showBorder?: boolean
  animate?: boolean
}

const ProfileImage: React.FC<ProfileImageProps> = ({ 
  className = '', 
  size = 'lg', 
  showBorder = true, 
  animate = true 
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  }

  const borderClasses = showBorder 
    ? 'ring-4 ring-primary-100 dark:ring-primary-900 ring-offset-4 ring-offset-white dark:ring-offset-gray-900' 
    : ''

  const imageComponent = (
    <img 
      src="/images/profile.jpg" 
      alt="Vinay Mourya - Software Developer" 
      className={`${sizeClasses[size]} rounded-full object-cover object-center ${borderClasses} ${className}`}
    />
  )

  if (animate) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {imageComponent}
      </motion.div>
    )
  }

  return imageComponent
}

export default ProfileImage