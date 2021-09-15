import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../assets/img/loading.gif';
import postImage from '../assets/img/newspaper-icon-png.jpg';
import PostForm from '../components/Posts/PostForm';
import Post from '../components/Posts/Post';
import { fetchPosts } from '../reducks/posts/operations';
import { getPosts } from '../reducks/posts/selectors';

const Home = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const posts = getPosts(selector);
    let [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        dispatch(fetchPosts({ page }));
        // eslint-disable-next-line
    }, []);

    const observer = useRef();
    const lastPostElement = useCallback(
        node => {
            if (observer.current) {
                observer.current.disconnect();
            }
            observer.current = new IntersectionObserver(async entries => {
                if (entries[0].isIntersecting && posts.next) {
                    setIsLoading(true);
                    setPage(++page);
                    await dispatch(fetchPosts({ page }));
                    setIsLoading(false);
                }
            });
            if (node) {
                observer.current.observe(node);
            }
        },
        // eslint-disable-next-line
        [posts.next]
    );

    return (
        <section className="content">
            <PostForm />
            <section className="posts">
                {posts.results.length > 0 ? (
                    <ul>
                        {posts.results.map((post, index) => {
                            return (
                                <Post
                                    ref={index === posts.results.length - 1 ? lastPostElement : null}
                                    key={post.id}
                                    post={post}
                                />
                            );
                        })}
                    </ul>
                ) : (
                    <div className="no-post">
                        <img width="72" src={postImage} alt="icon" />
                        <p>No posts here yet...</p>
                    </div>
                )}
                {isLoading && (
                    <div className="loading">
                        <img src={Loading} className="" alt="" />
                    </div>
                )}
            </section>
        </section>
    );
};

export default Home;
