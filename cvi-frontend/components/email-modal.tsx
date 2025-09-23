"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/contexts/ThemeContext'
import { getThemeColor, getAccentColor } from '@/lib/theme-utils'
import { X, Copy, Check } from 'lucide-react'
import { GmailIcon, OutlookIcon, YahooIcon, DefaultMailIcon } from './icons/email-icons'

interface EmailModalProps {
  email: string
  isOpen: boolean
  onClose: () => void
}

const EmailModal: React.FC<EmailModalProps> = ({ email, isOpen, onClose }) => {
  const { isDarkMode } = useTheme()
  const [copied, setCopied] = useState(false)
  
  const mailClients = [
    {
      name: 'Gmail',
      url: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
      icon: <GmailIcon />
    },
    {
      name: 'Outlook',
      url: `https://outlook.office.com/mail/deeplink/compose?to=${email}`,
      icon: <OutlookIcon />
    },
    {
      name: 'Yahoo Mail',
      url: `https://compose.mail.yahoo.com/?to=${email}`,
      icon: <YahooIcon />
    },
    {
      name: 'Default Mail Client',
      url: `mailto:${email}`,
      icon: <DefaultMailIcon />
    }
  ]

  const handleClientClick = (url: string) => {
    window.open(url, '_blank')
    onClose()
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div 
            className="fixed inset-0 bg-black/50" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          <motion.div 
            className="relative z-10 rounded-xl shadow-2xl p-6 max-w-md w-full mx-4"
            style={{ 
              backgroundColor: isDarkMode ? '#1F1F1F' : '#FFFFFF',
              color: getThemeColor(isDarkMode, 'secondaryText')
            }}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <X size={20} />
            </button>
            
            <h3 className="text-xl font-semibold mb-4">
              Choose how to contact us
            </h3>
            
            <p className="mb-6">
              Select your preferred email client or copy our email address:
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {mailClients.map((client) => (
                <Button
                  key={client.name}
                  onClick={() => handleClientClick(client.url)}
                  className="flex flex-col items-center justify-center h-24 p-4 hover:bg-opacity-90 transition-all"
                  style={{
                    backgroundColor: isDarkMode ? '#2A2A2A' : '#F5F5F5',
                    color: getThemeColor(isDarkMode, 'secondaryText'),
                    border: `1px solid ${isDarkMode ? '#3A3A3A' : '#E5E5E5'}`
                  }}
                >
                  <div className="mb-3 text-3xl" style={{ color: getAccentColor(isDarkMode) }}>
                    {client.icon}
                  </div>
                  <span className="text-sm font-medium">{client.name}</span>
                </Button>
              ))}
            </div>
            
            <div className="flex items-center border rounded-md p-2" 
              style={{ 
                backgroundColor: isDarkMode ? '#2A2A2A' : '#F5F5F5',
                borderColor: isDarkMode ? '#3A3A3A' : '#E5E5E5'
              }}>
              <span className="flex-1 truncate font-mono text-sm px-2">
                {email}
              </span>
              <Button 
                onClick={handleCopyEmail}
                className="ml-2 flex items-center gap-2"
                style={{ 
                  backgroundColor: getAccentColor(isDarkMode),
                  color: '#FFFFFF'
                }}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </Button>
            </div>
            
            {/* Copy success toast notification */}
            <AnimatePresence>
              {copied && (
                <motion.div
                  className="fixed bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
                  style={{
                    backgroundColor: isDarkMode ? '#333' : '#fff',
                    color: getThemeColor(isDarkMode, 'secondaryText'),
                    border: `1px solid ${isDarkMode ? '#444' : '#eee'}`
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Check size={16} color={getAccentColor(isDarkMode)} />
                  <span>Email copied to clipboard!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default EmailModal
