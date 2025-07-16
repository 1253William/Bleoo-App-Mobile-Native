"use client"

import { FlatList, RefreshControl, View } from "react-native"
import FeedCard from "./feed-card"
import FloatingAddButton from "./floating-add-button"

interface Post {
  id: string
  user: {
    fullName: string
    username: string
    avatar?: string
  }
  content?: string
  image?: string
  timestamp: string
  stats: {
    comments: number
    reposts: number
    likes: number
  }
  settings: {
    allowComments: boolean
    allowReposts: boolean
    allowShares: boolean
  }
  isLiked?: boolean
  isReposted?: boolean
}

interface FeedListProps {
  posts: Post[]
  onRefresh?: () => void
  onLoadMore?: () => void
  onAddPost?: () => void
  refreshing?: boolean
}

export default function FeedList({ posts, onRefresh, onLoadMore, onAddPost, refreshing = false }: FeedListProps) {
  const handleComment = (postId: string) => {
    console.log("Comment on post:", postId)
  }

  const handleRepost = (postId: string) => {
    console.log("Repost:", postId)
  }

  const handleLike = (postId: string) => {
    console.log("Like post:", postId)
  }

  const handleShare = (postId: string) => {
    console.log("Share post:", postId)
  }

  const renderPost = ({ item }: { item: Post }) => (
    <FeedCard
      post={item}
      onComment={handleComment}
      onRepost={handleRepost}
      onLike={handleLike}
      onShare={handleShare}
    />
  )

  return (
    <View className="flex-1">
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        onEndReached={onLoadMore}
        onEndReachedThreshold={0.1}
        showsVerticalScrollIndicator={false}
      />
      <FloatingAddButton onPress={onAddPost || (() => {})} />
    </View>
  )
}
