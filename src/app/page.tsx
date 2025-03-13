import styles from "./page.module.css";
import Banner from '@/components/Banner';
import Card from '@/components/Card';

export default function Home() {
    return (
        <main className={styles.main}>
            <div>
                <Banner/>
                <div style={{display: "flex", justifyContent: "center", gap: "3%", marginTop: "20px"}}>
                        <Card venueName='The Bloom Pavilion' imgSrc='/img/bloom.jpg'/>
                        <Card venueName='Spark Space' imgSrc='/img/sparkspace.jpg'/>
                        <Card venueName='The Grand Table' imgSrc='/img/grandtable.jpg'/>
                </div>
            </div>
        </main>
    );
}
