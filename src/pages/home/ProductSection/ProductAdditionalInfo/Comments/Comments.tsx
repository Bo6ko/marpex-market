import { useState } from 'react';
import css from './Comments.module.css';
import commentsMock, { CommentsType } from './CommentsMock';
import { ReactComponent as Star } from '../../../../../assets/svg/star.svg';

type FormType = {
  fullname: string,
  email: string,
  comment: string
}

const Comment = ({ comment }: { comment: CommentsType }) => {
  return (
    <div className={css.comments}>
      <div className={css.header}>
        <div className={css.userInfo}>
          <div className={css.avatar}>
            <img src={comment.avatar} alt="avatar" />
          </div>
          <div>
            <p className={css.fullname}>{comment.fullname}</p>
            <p className={css.username}>{comment.username}</p>
          </div>
        </div>
        <div className={css.rating}>
          {Array.from({ length: 5 }).map((_, index) => (
            comment.rating && comment.rating > index
              ? <Star key={index} className={css.starSvg} />
              : <Star key={index} className={css.starSvgUnfilled} />
          ))}
          <span className={css.rateNumber}>{comment.rating}/5</span>
        </div>
      </div>

      <p className={css.description}>{comment.description}</p>
    </div>
  )
}

const Comments = () => {
  const [comments, setComments] = useState<any>(commentsMock);
  const [formData, setFormData] = useState<FormType>({
    fullname: '',
    email: '',
    comment: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Form submitted: Fullname: ' + formData.fullname + ' Email: ' + formData.email + ' Comment: ' + formData.comment);
    const newComment = {
      avatar: '',
      fullname: formData.fullname,
      username: '@username',
      rating: 4,
      description: formData.comment
    };
    setComments([...comments, newComment]);
    setFormData({
      fullname: '',
      email: '',
      comment: ''
    });
};

return (
  <>
    <form className={css.form} onSubmit={handleSubmit} >
      <label className={css.label}>Остави коментар</label>

      <div className={css.formRow}>
        <input
          className={css.input}
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          placeholder="Име и фамилия"
        />

        <input
          className={css.input}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="И-меил"
        />
      </div>

      <div className={css.formRow}>
        <textarea
          className={css.textarea}
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          placeholder="Коментар"
        />
      </div>

      <button className={css.btn} type="submit">Изпрати</button>
    </form>

    {comments.map((comment: any, index: number) => {
      return <Comment key={index} comment={comment} />
    })}
  </>

);
};

export default Comments;