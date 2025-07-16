"use client"

import { useState } from "react"
import { Switch, Text, View } from "react-native"

interface PostSettingsProps {
  settings: {
    allowComments: boolean
    allowReposts: boolean
    allowShares: boolean
  }
  onSettingsChange: (settings: any) => void
}

export default function PostSettings({ settings, onSettingsChange }: PostSettingsProps) {
  const [localSettings, setLocalSettings] = useState(settings)

  const updateSetting = (key: string, value: boolean) => {
    const newSettings = { ...localSettings, [key]: value }
    setLocalSettings(newSettings)
    onSettingsChange(newSettings)
  }

  return (
    <View className="bg-white p-4 rounded-lg border border-gray-200">
      <Text className="text-lg font-semibold text-gray-900 mb-4">Post Settings</Text>

      <View className="space-y-4">
        <View className="flex-row items-center justify-between">
          <Text className="text-base text-gray-700">Allow Comments</Text>
          <Switch
            value={localSettings.allowComments}
            onValueChange={(value) => updateSetting("allowComments", value)}
            trackColor={{ false: "#d1d5db", true: "#002D69" }}
            thumbColor="#ffffff"
          />
        </View>

        <View className="flex-row items-center justify-between">
          <Text className="text-base text-gray-700">Allow Reposts</Text>
          <Switch
            value={localSettings.allowReposts}
            onValueChange={(value) => updateSetting("allowReposts", value)}
            trackColor={{ false: "#d1d5db", true: "#002D69" }}
            thumbColor="#ffffff"
          />
        </View>

        <View className="flex-row items-center justify-between">
          <Text className="text-base text-gray-700">Allow Shares</Text>
          <Switch
            value={localSettings.allowShares}
            onValueChange={(value) => updateSetting("allowShares", value)}
            trackColor={{ false: "#d1d5db", true: "#002D69" }}
            thumbColor="#ffffff"
          />
        </View>
      </View>
    </View>
  )
}
