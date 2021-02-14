import React from "react";
import { Octokit } from '@octokit/rest';
import styles from "./About.module.css";
import { LinearProgress } from '@material-ui/core';
import RepoList from "../RepoList/RepoList";
import Card from "@material-ui/core/Card";
import CircularProgress from "@material-ui/core/CircularProgress";

const octokit = new Octokit();

class About extends React.Component {

    state = {
        username: 'AntonovaAL',
        isLoading: true,
        repoList: [],
        errorText: 'Возникла ошибка при получении данных',
        isError: false,
        userData: {},
        firstRepo: 0,
        lastRepo: 5
    };

    componentDidMount() {
        octokit.repos.listForUser({
            username: this.state.username
        })
            .then(({ data }) => {
                this.setState({
                    repoList: data,
                    isLoading: false
                });
            })
            .catch(() => {
                this.setState({
                    isLoading: false,
                    isError: true,
                    //errorText: err
                })
            });
 //           .finally(() => {
   //             this.setState({
     //               isLoading: false
       //         })
        //    });

        octokit.users.getByUsername({
            username: this.state.username
        })
            .then(({data}) => {
                this.setState({
                   userData: data,
                   isLoading: false,
                })
            })
            .catch(err => {
                this.setState({
                    isLoading: false,
                    isError: true,
                    errorText: err
                })
            });
           // .finally(() => {
             //   this.setState({
               //     isLoading: false
               // })
           // });
    };
    onClickNext = () => {
        this.setState({
            firstRepo: this.state.firstRepo + 5,
            lastRepo: this.state.lastRepo + 5
        });
    };

    onClickBack = () => {
        this.setState({
            firstRepo: this.state.firstRepo - 5,
            lastRepo: this.state.lastRepo - 5
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
                            <div>
                                <p className={styles.avatar__title}> {userData.name} </p>
                                <p className={styles.avatar__subtitle}> {userData.bio} </p>
                            </div>
                        </p>
                    </div>
                    <Card>
                        <div className={styles.repos}>
                            {isLoading ?
                                <div>
                                    <h3> Список репозиториев на github.com </h3>
                                    <CircularProgress/>
                                </div> :
                                <div>
                                    {isError ?
                                        <div>
                                            <h3> Что-то пошло не так. Невозможно отобразить список репозиториев :( </h3>
                                        </div> :
                                        <div>
                                            {repoList.length === 0 ?
                                                <div>
                                                    <h3> Список репозиториев на github.com. К сожалению у Вас нет ни одного репозитория... </h3>
                                                </div> :
                                                <RepoList
                                                    repoList={repoList}
                                                    infoOfUser={userData}
                                                    onClickNext={this.onClickNext}
                                                    onClickBack={this.onClickBack}
                                                    firstRepo={this.state.firstRepo}
                                                    lastRepo={this.state.lastRepo}
                                                />
                                            }
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                </Card>
            </div>
        );






        else
            return (
                <h2 className={styles.errorText}>
                    {errorText}...
                </h2>
            )
    };
};


export default About;