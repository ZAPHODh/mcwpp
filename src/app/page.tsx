'use client'
import styles from './page.module.css'

import { Header } from '@/Components/Header'

import { useSession } from 'next-auth/react'
import { Guest } from './Templates/Guest'

export default function Home() {
    const { data: session } = useSession()
    return (
        <main className={styles.main}>
            <Header session={session} title="Bem vindo."></Header>
            {session ? 'aasfasfsafasf' : <Guest />}
        </main>
    )
}
