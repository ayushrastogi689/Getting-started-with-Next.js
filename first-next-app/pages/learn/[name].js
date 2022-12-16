// Topic : Dynamic Routes

// Suppose you want to talk about a 10-100 different technologies then defining routes by predefining paths will be a hectic task as you need to manually define the path for each page/file. 
// Writing code for each file again and again is not a good idea.

// In Next.js we can add [] to the file name like this - [learnReact].js . This allows us to create a Dynamic Routes

// For this we will use a Next.js hook useRouter

import React from 'react'

import {useRouter} from "next/router"
import topics from '../api/topics';

function Learn() {
    const router = useRouter();
    const {name} = router.query
    const topic = topics.find(topic => topic.id == name)
  return (
    <div>
        <h1>Inside Learn folder</h1>
        <p>Learn {topic.id})</p>
    </div>
  )
}

export default Learn