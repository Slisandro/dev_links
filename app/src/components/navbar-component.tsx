import { useNavigate } from 'react-router-dom';
import ButtonComponent from './button-component';

function NavBarComponent() {
    const navigate = useNavigate();
    const onNavigateToProfile = () => navigate("/edit/profile");
    const onNavigateToLinks = () => navigate("/edit/links");
    const onNavigateToPreview = () => navigate("/preview");
    return (
        <nav className="navbar">
            <div className="logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5235 34.225C8.96683 36.6666 12.8935 36.6666 20.7502 36.6666C28.6068 36.6666 32.5352 36.6666 34.9752 34.225C37.4168 31.7866 37.4168 27.8566 37.4168 20C37.4168 12.1433 37.4168 8.21498 34.9752 5.77331C32.5368 3.33331 28.6068 3.33331 20.7502 3.33331C12.8935 3.33331 8.96516 3.33331 6.5235 5.77331C4.0835 8.21665 4.0835 12.1433 4.0835 20C4.0835 27.8566 4.0835 31.785 6.5235 34.225ZM16.5835 14.5833C15.5122 14.5833 14.4649 14.901 13.5742 15.4962C12.6834 16.0914 11.9891 16.9373 11.5791 17.9271C11.1692 18.9169 11.0619 20.006 11.2709 21.0567C11.4799 22.1074 11.9958 23.0726 12.7533 23.8301C13.5109 24.5877 14.476 25.1036 15.5268 25.3126C16.5775 25.5216 17.6666 25.4143 18.6564 25.0043C19.6461 24.5944 20.4921 23.9001 21.0873 23.0093C21.6825 22.1186 22.0002 21.0713 22.0002 20C22.0002 19.6685 22.1319 19.3505 22.3663 19.1161C22.6007 18.8817 22.9186 18.75 23.2502 18.75C23.5817 18.75 23.8996 18.8817 24.134 19.1161C24.3685 19.3505 24.5002 19.6685 24.5002 20C24.5002 21.5657 24.0359 23.0964 23.166 24.3982C22.2961 25.7001 21.0597 26.7148 19.6131 27.314C18.1665 27.9132 16.5747 28.07 15.039 27.7645C13.5033 27.4591 12.0927 26.7051 10.9856 25.5979C9.8784 24.4907 9.12441 23.0801 8.81895 21.5444C8.51348 20.0088 8.67026 18.417 9.26945 16.9704C9.86864 15.5238 10.8833 14.2874 12.1852 13.4175C13.4871 12.5476 15.0177 12.0833 16.5835 12.0833C16.915 12.0833 17.233 12.215 17.4674 12.4494C17.7018 12.6838 17.8335 13.0018 17.8335 13.3333C17.8335 13.6648 17.7018 13.9828 17.4674 14.2172C17.233 14.4516 16.915 14.5833 16.5835 14.5833ZM30.3335 20C30.3335 21.4366 29.7628 22.8143 28.747 23.8301C27.7312 24.846 26.3534 25.4166 24.9168 25.4166C24.5853 25.4166 24.2674 25.5483 24.0329 25.7828C23.7985 26.0172 23.6668 26.3351 23.6668 26.6666C23.6668 26.9982 23.7985 27.3161 24.0329 27.5505C24.2674 27.785 24.5853 27.9166 24.9168 27.9166C26.4826 27.9166 28.0132 27.4523 29.3151 26.5824C30.617 25.7126 31.6317 24.4761 32.2309 23.0296C32.8301 21.583 32.9868 19.9912 32.6814 18.4555C32.3759 16.9198 31.6219 15.5092 30.5148 14.4021C29.4076 13.2949 27.997 12.5409 26.4613 12.2354C24.9256 11.93 23.3338 12.0867 21.8873 12.6859C20.4407 13.2851 19.2043 14.2998 18.3344 15.6017C17.4645 16.9036 17.0002 18.4342 17.0002 20C17.0002 20.3315 17.1319 20.6494 17.3663 20.8839C17.6007 21.1183 17.9186 21.25 18.2502 21.25C18.5817 21.25 18.8996 21.1183 19.134 20.8839C19.3685 20.6494 19.5002 20.3315 19.5002 20C19.5002 18.5634 20.0708 17.1856 21.0867 16.1698C22.1025 15.154 23.4802 14.5833 24.9168 14.5833C26.3534 14.5833 27.7312 15.154 28.747 16.1698C29.7628 17.1856 30.3335 18.5634 30.3335 20Z" fill="#633CFF" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="108" height="20" viewBox="0 0 136 27" fill="none">
                    <path d="M13.9972 26.15V22.195L14.3435 22.265C14.1126 23.5483 13.4201 24.575 12.2658 25.345C11.1346 26.115 9.77261 26.5 8.17974 26.5C6.56378 26.5 5.15559 26.1267 3.95516 25.38C2.77782 24.61 1.86596 23.5367 1.21957 22.16C0.573191 20.7833 0.25 19.1617 0.25 17.295C0.25 15.405 0.584734 13.76 1.2542 12.36C1.92367 10.96 2.85862 9.875 4.05904 9.105C5.28255 8.335 6.70229 7.95 8.31824 7.95C10.0035 7.95 11.3655 8.34666 12.4043 9.14C13.4662 9.93333 14.0895 11.0183 14.2742 12.395L13.8933 12.43V0.949999H19.0875V26.15H13.9972ZM9.84186 22.3C11.0654 22.3 12.058 21.8683 12.8198 21.005C13.5817 20.1183 13.9626 18.8583 13.9626 17.225C13.9626 15.5917 13.5701 14.3433 12.7852 13.48C12.0234 12.5933 11.0192 12.15 9.77261 12.15C8.57218 12.15 7.57952 12.5933 6.79463 13.48C6.03282 14.3667 5.65192 15.6267 5.65192 17.26C5.65192 18.8933 6.03282 20.1417 6.79463 21.005C7.57952 21.8683 8.59527 22.3 9.84186 22.3Z" fill="#333333" />
                    <path d="M31.551 26.5C29.5887 26.5 27.8804 26.115 26.4261 25.345C24.9717 24.5517 23.8405 23.455 23.0326 22.055C22.2477 20.655 21.8552 19.045 21.8552 17.225C21.8552 15.3817 22.2477 13.7717 23.0326 12.395C23.8405 10.995 24.9602 9.91 26.3915 9.14C27.8227 8.34666 29.4849 7.95 31.3778 7.95C33.2016 7.95 34.7829 8.32333 36.1218 9.07C37.4608 9.81667 38.4996 10.855 39.2383 12.185C39.977 13.515 40.3464 15.0783 40.3464 16.875C40.3464 17.2483 40.3349 17.5983 40.3118 17.925C40.2887 18.2283 40.2541 18.52 40.2079 18.8H24.9025V15.335H36.0179L35.1176 15.965C35.1176 14.5183 34.7713 13.4567 34.0788 12.78C33.4093 12.08 32.4859 11.73 31.3086 11.73C29.9466 11.73 28.8846 12.1967 28.1228 13.13C27.3841 14.0633 27.0147 15.4633 27.0147 17.33C27.0147 19.15 27.3841 20.5033 28.1228 21.39C28.8846 22.2767 30.0158 22.72 31.5163 22.72C32.3474 22.72 33.063 22.58 33.6633 22.3C34.2635 22.02 34.7136 21.565 35.0137 20.935H39.8962C39.3191 22.6617 38.3265 24.0267 36.9183 25.03C35.5332 26.01 33.7441 26.5 31.551 26.5Z" fill="#333333" />
                    <path d="M47.4302 26.15L40.47 8.3H46.0451L51.4816 24.96H48.5729L53.9748 8.3H59.4114L52.4512 26.15H47.4302Z" fill="#333333" />
                    <path d="M61.4187 26.15V0.949999H66.6128V26.15H61.4187Z" fill="#333333" />
                    <path d="M70.7519 26.15V8.3H75.9461V26.15H70.7519ZM70.5788 5.92V0.25H76.1192V5.92H70.5788Z" fill="#333333" />
                    <path d="M80.0852 26.15V8.3H85.1754V12.5H85.2793V26.15H80.0852ZM92.378 26.15V15.09C92.378 14.11 92.124 13.375 91.6162 12.885C91.1314 12.395 90.4157 12.15 89.4693 12.15C88.6613 12.15 87.9341 12.3367 87.2877 12.71C86.6644 13.0833 86.1681 13.5967 85.7987 14.25C85.4524 14.9033 85.2793 15.6733 85.2793 16.56L84.8292 12.255C85.4063 10.9483 86.2489 9.91 87.357 9.14C88.4881 8.34666 89.8733 7.95 91.5123 7.95C93.4745 7.95 94.9751 8.51 96.0139 9.63C97.0527 10.7267 97.5721 12.2083 97.5721 14.075V26.15H92.378Z" fill="#333333" />
                    <path d="M101.525 26.15V0.949999H106.719V26.15H101.525ZM112.848 26.15L105.507 16.875L112.675 8.3H118.665L110.251 17.68L110.493 16.035L119.012 26.15H112.848Z" fill="#333333" />
                    <path d="M127.493 26.5C124.908 26.5 122.853 25.975 121.33 24.925C119.806 23.875 118.975 22.4283 118.836 20.585H123.477C123.592 21.3783 123.984 21.985 124.654 22.405C125.346 22.8017 126.293 23 127.493 23C128.578 23 129.363 22.8483 129.848 22.545C130.356 22.2183 130.61 21.7633 130.61 21.18C130.61 20.7367 130.46 20.3983 130.16 20.165C129.883 19.9083 129.363 19.6983 128.602 19.535L125.762 18.94C123.661 18.4967 122.115 17.8317 121.122 16.945C120.129 16.035 119.633 14.8683 119.633 13.445C119.633 11.7183 120.291 10.3767 121.607 9.42C122.923 8.44 124.758 7.95 127.113 7.95C129.444 7.95 131.302 8.42833 132.688 9.385C134.073 10.3183 134.834 11.625 134.973 13.305H130.333C130.241 12.6983 129.917 12.2433 129.363 11.94C128.809 11.6133 128.024 11.45 127.009 11.45C126.085 11.45 125.393 11.59 124.931 11.87C124.492 12.1267 124.273 12.5 124.273 12.99C124.273 13.41 124.458 13.7483 124.827 14.005C125.196 14.2383 125.808 14.4483 126.662 14.635L129.848 15.3C131.626 15.6733 132.965 16.3733 133.865 17.4C134.788 18.4033 135.25 19.5933 135.25 20.97C135.25 22.72 134.569 24.085 133.207 25.065C131.868 26.0217 129.964 26.5 127.493 26.5Z" fill="#333333" />
                </svg>
            </div>

            <div className="actions">
                <ButtonComponent
                    className="selected"
                    label="Links"
                    icon={<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.1539 14.6508C11.2413 14.7379 11.3107 14.8413 11.358 14.9553C11.4053 15.0693 11.4296 15.1914 11.4296 15.3148C11.4296 15.4382 11.4053 15.5604 11.358 15.6743C11.3107 15.7883 11.2413 15.8918 11.1539 15.9789L10.6898 16.4429C9.81049 17.3223 8.61782 17.8163 7.37422 17.8163C6.13062 17.8163 4.93795 17.3223 4.0586 16.4429C3.17924 15.5636 2.68522 14.3709 2.68522 13.1273C2.68522 11.8837 3.17924 10.691 4.0586 9.81169L5.94297 7.9281C6.78788 7.0811 7.92467 6.58921 9.12049 6.55319C10.3163 6.51717 11.4806 6.93974 12.375 7.73435C12.4673 7.81642 12.5426 7.91588 12.5965 8.02705C12.6504 8.13821 12.6819 8.2589 12.6891 8.38223C12.6964 8.50556 12.6793 8.62911 12.6388 8.74582C12.5983 8.86254 12.5352 8.97014 12.4531 9.06247C12.3711 9.15481 12.2716 9.23007 12.1604 9.28397C12.0493 9.33787 11.9286 9.36934 11.8052 9.3766C11.6819 9.38385 11.5584 9.36675 11.4417 9.32625C11.3249 9.28576 11.2173 9.22267 11.125 9.1406C10.5887 8.66429 9.89065 8.4109 9.17369 8.43224C8.45672 8.45359 7.77499 8.74807 7.26797 9.25544L5.38516 11.1367C4.85763 11.6642 4.56126 12.3797 4.56126 13.1258C4.56126 13.8718 4.85763 14.5873 5.38516 15.1148C5.91269 15.6423 6.62818 15.9387 7.37422 15.9387C8.12026 15.9387 8.83575 15.6423 9.36328 15.1148L9.82735 14.6508C9.91441 14.5636 10.0178 14.4944 10.1316 14.4473C10.2454 14.4001 10.3674 14.3758 10.4906 14.3758C10.6138 14.3758 10.7358 14.4001 10.8496 14.4473C10.9634 14.4944 11.0668 14.5636 11.1539 14.6508ZM16.9414 3.557C16.0613 2.679 14.8689 2.18591 13.6258 2.18591C12.3826 2.18591 11.1902 2.679 10.3102 3.557L9.8461 4.02107C9.66998 4.19719 9.57103 4.43606 9.57103 4.68513C9.57103 4.9342 9.66998 5.17307 9.8461 5.34919C10.0222 5.52531 10.2611 5.62426 10.5102 5.62426C10.7592 5.62426 10.9981 5.52531 11.1742 5.34919L11.6383 4.88513C12.1658 4.3576 12.8813 4.06123 13.6273 4.06123C14.3734 4.06123 15.0889 4.3576 15.6164 4.88513C16.1439 5.41266 16.4403 6.12815 16.4403 6.87419C16.4403 7.62023 16.1439 8.33572 15.6164 8.86325L13.7328 10.7476C13.2253 11.2548 12.5432 11.5488 11.8261 11.5696C11.1089 11.5904 10.411 11.3363 9.875 10.8593C9.78267 10.7773 9.67507 10.7142 9.55835 10.6737C9.44164 10.6332 9.31809 10.6161 9.19476 10.6233C9.07143 10.6306 8.95074 10.6621 8.83958 10.716C8.72841 10.7699 8.62895 10.8451 8.54688 10.9375C8.4648 11.0298 8.40172 11.1374 8.36122 11.2541C8.32073 11.3708 8.30362 11.4944 8.31088 11.6177C8.31813 11.741 8.3496 11.8617 8.4035 11.9729C8.4574 12.0841 8.53267 12.1835 8.625 12.2656C9.51874 13.06 10.6823 13.4829 11.8775 13.4476C13.0728 13.4123 14.2094 12.9215 15.0547 12.0758L16.9391 10.1922C17.8181 9.3123 18.3121 8.11957 18.3125 6.87585C18.3129 5.63212 17.8198 4.43905 16.9414 3.55857V3.557Z" fill="currentColor" />
                    </svg>}
                    onClick={onNavigateToLinks} disabled={false} type={'outline'} />

                <ButtonComponent
                    label="Profile Details"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <path d="M10.5 1.5625C8.83122 1.5625 7.19992 2.05735 5.81238 2.98448C4.42484 3.9116 3.34338 5.22936 2.70477 6.77111C2.06615 8.31286 1.89906 10.0094 2.22462 11.6461C2.55019 13.2828 3.35378 14.7862 4.53379 15.9662C5.71379 17.1462 7.21721 17.9498 8.85393 18.2754C10.4906 18.6009 12.1871 18.4338 13.7289 17.7952C15.2706 17.1566 16.5884 16.0752 17.5155 14.6876C18.4426 13.3001 18.9375 11.6688 18.9375 10C18.935 7.763 18.0453 5.61833 16.4635 4.03653C14.8817 2.45473 12.737 1.56498 10.5 1.5625ZM6.71641 15.357C7.15162 14.7619 7.72106 14.2779 8.37848 13.9442C9.0359 13.6106 9.76275 13.4367 10.5 13.4367C11.2372 13.4367 11.9641 13.6106 12.6215 13.9442C13.2789 14.2779 13.8484 14.7619 14.2836 15.357C13.1778 16.1412 11.8556 16.5625 10.5 16.5625C9.14435 16.5625 7.82221 16.1412 6.71641 15.357ZM8.3125 9.375C8.3125 8.94235 8.44079 8.51942 8.68116 8.15969C8.92153 7.79996 9.26317 7.51958 9.66288 7.35401C10.0626 7.18845 10.5024 7.14513 10.9268 7.22953C11.3511 7.31394 11.7409 7.52228 12.0468 7.8282C12.3527 8.13413 12.5611 8.52391 12.6455 8.94824C12.7299 9.37257 12.6866 9.81241 12.521 10.2121C12.3554 10.6118 12.075 10.9535 11.7153 11.1938C11.3556 11.4342 10.9326 11.5625 10.5 11.5625C9.91984 11.5625 9.36344 11.332 8.9532 10.9218C8.54297 10.5116 8.3125 9.95516 8.3125 9.375ZM15.6562 14.0578C15.0486 13.2849 14.2741 12.6595 13.3906 12.2281C13.9537 11.658 14.3355 10.934 14.4881 10.1474C14.6408 9.36074 14.5573 8.54653 14.2484 7.80718C13.9394 7.06783 13.4187 6.43637 12.7517 5.99223C12.0847 5.5481 11.3013 5.31112 10.5 5.31112C9.69869 5.31112 8.91527 5.5481 8.24831 5.99223C7.58134 6.43637 7.06062 7.06783 6.75165 7.80718C6.44267 8.54653 6.35925 9.36074 6.51187 10.1474C6.66449 10.934 7.04634 11.658 7.60938 12.2281C6.72591 12.6595 5.9514 13.2849 5.34375 14.0578C4.5805 13.0903 4.10511 11.9274 3.97199 10.7022C3.83887 9.47711 4.05341 8.23925 4.59104 7.13037C5.12867 6.02148 5.96766 5.08639 7.01199 4.43212C8.05631 3.77786 9.26375 3.43086 10.4961 3.43086C11.7284 3.43086 12.9359 3.77786 13.9802 4.43212C15.0245 5.08639 15.8635 6.02148 16.4011 7.13037C16.9388 8.23925 17.1533 9.47711 17.0202 10.7022C16.8871 11.9274 16.4117 13.0903 15.6484 14.0578H15.6562Z" fill="currentColor" />
                    </svg>}
                    onClick={onNavigateToProfile} disabled={false} type={'outline'} />
            </div>
            <div className="preview">
                <ButtonComponent onClick={onNavigateToPreview} type="outline" label="Preview" disabled={false} />
            </div>
        </nav>
    )
}

export default NavBarComponent