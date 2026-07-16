import Image from 'next/image';
import './Style/Post.css'
import Link from 'next/link';
import { Character } from '@/types';

type PostsCharacter = {
  posts: Character[];
};

const CharacterCard =  ({posts}: PostsCharacter) => {
  return (
    posts.map((char) => (
      <div key={char.id} className="flex border bg-gray-800 h-50 ">
        <div className='w-50 relative'>
          <Image src={char.image} alt={char.name} fill/>
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

export default CharacterCard