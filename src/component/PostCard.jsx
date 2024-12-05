import cover_1 from './imags/margherita.jpg';
import cover_2 from './imags/peperoni.jpg';
import style from './styles/PostCard.module.css';

function PostCard (){
 const posts = [
	{
		id: 1,
		title: 'Titolo del Post',
		image: cover_1 /* compila questo campo */,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
		tags: ['html', 'css'],
		published: true,
	},
	{
		id: 2,
		title: 'Titolo del Post',
		image: cover_2 /* compila questo campo */,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
		tags: ['js', 'css'],
		published: true,
	},
	{
		id: 3,
		title: 'Titolo del Post',
		image: cover_1 /* compila questo campo */,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
		tags: ['js', 'php'],
		published: true,
	},
	{
		id: 4,
		title: 'Titolo del Post',
		image: cover_2 /* compila questo campo */,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
		tags: ['html'],
		published: false,
	},
]

    return(
        <>
        {.map((post)=>
        <div key={post.id} className={style.col}>
            <div className={style.card}>
                <img className={style.img} src={post.image} alt="" />
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                <p>{post.tags.join(" ")}</p>
            </div>
        </div>
            )}
        </>
    )
}
export default PostCard;