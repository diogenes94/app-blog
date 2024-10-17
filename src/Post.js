import { Card } from 'primereact/card';
import { Accordion, AccordionTab} from 'primereact/accordion'
function Post({ post, user, comments }) {

    const header = (
        <div>
            <h3>{post.title}</h3>
            <p>Escrito por: {user ? user.name : 'Sem autor'}</p>
        </div>
    );

    return (
        <Card title={header} style={{marginBottom: '20px'}} >
            <p>{post.body}</p>
            <Accordion>
                <AccordionTab header={`Comentários (${comments.length})`} >
                    {comments.length > 0 ? (
                        <ul>
                            {comments.map(comment => (
                                <li key={comment.id}>
                                    <strong>{comment.name}</strong>: 
                                    {comment.body}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Sem comentários</p>
                    )}
                </AccordionTab>
            </Accordion>
        </Card>
    );
}

export default Post;