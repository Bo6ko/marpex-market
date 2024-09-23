import Avatar from '../../../../../assets/images/avatar.png';

export type CommentsType = {
    avatar: string,
    fullname: string,
    username: string,
    rating?: number,
    description: string
}

const commentsMock: CommentsType[] = [
    {
        avatar: Avatar,
        fullname: 'Иван Иванов',
        username: '@username',
        rating: 4,
        description: 'Lorem ipsum dolor sit amet consectetur. Diam nascetur morbi placerat sed at et nisl nisl. Velit viverra lorem odio quis enim aliquam mauris faucibus pretium. Amet elit nunc nisl a. Nec dictumst semper in eget porttitor ultrices sagittis.'
    },
    {
        avatar: Avatar,
        fullname: 'Иван Иванов',
        username: '@username',
        rating: 5,
        description: 'Lorem ipsum dolor sit amet consectetur. Non urna morbi pellentesque scelerisque. Tellus nunc diam vitae viverra. Nisl adipiscing quis aenean elit habitant. Elit eget sem tempor egestas elementum. Sed sed proin eu lacinia et semper lorem egestas ullamcorper. Sed sit pharetra arcu augue mauris hac. Convallis id neque lorem proin. Sit arcu sed mauris eget molestie blandit aliquam arcu viverra. Vivamus velit tincidunt sit amet ut bibendum imperdiet blandit mattis. Porta libero amet senectus pharetra posuere ultricies. '
    },
    {
        avatar: Avatar,
        fullname: 'Иван Иванов',
        username: '@username',
        rating: 5,
        description: 'Lorem ipsum dolor sit amet consectetur. Diam nascetur morbi placerat sed at et nisl nisl. Velit viverra lorem odio quis enim aliquam mauris faucibus pretium. Amet elit nunc nisl a. Nec dictumst semper in eget porttitor ultrices sagittis.'
    },
    {
        avatar: Avatar,
        fullname: 'Иван Иванов',
        username: '@username',
        rating: 5,
        description: 'Lorem ipsum dolor sit amet consectetur. Non urna morbi pellentesque scelerisque. Tellus nunc diam vitae viverra. Nisl adipiscing quis aenean elit habitant. Elit eget sem tempor egestas elementum. Sed sed proin eu lacinia et semper lorem egestas ullamcorper. Sed sit pharetra arcu augue mauris hac. Convallis id neque lorem proin. Sit arcu sed mauris eget molestie blandit aliquam arcu viverra. Vivamus velit tincidunt sit amet ut bibendum imperdiet blandit mattis. Porta libero amet senectus pharetra posuere ultricies. '
    }
]

export default commentsMock;
