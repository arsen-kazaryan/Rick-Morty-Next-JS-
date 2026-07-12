import Image from 'next/image';
import './Style/Post.css'
import Link from 'next/link';

interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  location:{
    name:string;
  }
}
type PostsProps = {
  posts: Character[]
}

const Post =  ({posts}: PostsProps) => {
  return (
    posts.map((char) => (
      <div key={char.id} className="post">
        <div className='post_iamge-wrapper'>
          <Image src={char.image} alt={char.name} width={200} height={250}  />
        </div>
        <div className="post_content-wrapper">
          <Link href={`/character/${char.id}`} className="post_name">{char.name}</Link>
          <p>{char.status === 'Alive' ? '🟢' : '🔴'} {char.status}</p>
          <p>{char.location.name}</p>
        </div>
      </div>
    ))
  )
}

export default Post