import React from "react";
import { Octokit } from '@octokit/rest';
import styles from "./About.module.css";
import { LinearProgress } from '@material-ui/core';


const octokit = new Octokit();

class About extends React.Component {

    state = {
        isLoading: true,
        repoList: [],
        errorText: 'Возникла ошибка при получении данных',
        isError: false,
        userData: {}
    };

    componentDidMount() {
        octokit.repos.listForUser({
            username: 'AntonovaAL'
        })
            .then(({ data }) => {
                this.setState({
                    repoList: data
                });
            })
            .catch(() => {
                this.setState({
                    isError: true
                })
            })
            .finally(() => {
                this.setState({
                    isLoading: false
                })
            });

        octokit.users.getByUsername({
            username: 'AntonovaAL'
        })
            .then((user) => {
                this.setState({
                    userData: user.data
                })
            })
            .catch(() => {
                this.setState({
                    isError: true
                })
            })
            .finally(() => {
                this.setState({
                    isLoading: false
                })
            });
    };

    render() {
        const { isLoading, repoList, userData, isError, errorText } = this.state;

        if (!isError)
            return (
                <div className={styles.wrapper}>
                    <div className={styles.userInfo}>
                        <h1 className={styles.userInfo__header}>
                            {userData.name} (<a href={userData.html_url} target="__blank">{userData.login}</a>)
                    </h1>
                        <p>
                            <img className={styles.avatar} src={userData.avatar_url} alt='Фото профиля' />
                            {userData.bio ? userData.bio : 'Антонова Анастасия Леонидовна'}
                        </p>
                    </div>

                    <div>
                        <h1>{isLoading ? <LinearProgress /> : 'Мои репозитории:'}</h1>
                        {!isLoading && <ol className={styles.repoList}>
                            {repoList.map(item => (
                                <li
                                    className={styles.repoItem}
                                    key={item.id}
                                >
                                    <a href={item.html_url} target="__blank">{item.name}</a>
                                </li>
                            ))}
                        </ol>}
                    </div>
                </div>
            )
        else
            return (
                <h2 className={styles.errorText}>
                    {errorText}...
                </h2>
            )
    };
};


export default About;