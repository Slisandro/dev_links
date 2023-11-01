import technologies, { TechnologiesId } from '../constants/technologies-constants';

function PreviewLinksComponent({ type, x, y }: { type?: TechnologiesId, x: string, y: string }) {
    // console.log({type})
    switch (type) {
        case "github":
            return (
                <>
                    <rect width="237" height="44" x={x} y={y} rx="8" fill="#1A1A1A" />
                    <g clip-path="url(#clip0_86_23287)" transform={`translate(${x}, ${y})`}>
                        <path d="M25.9817 16.2881C24.6779 15.9851 23.3219 15.9851 22.018 16.2881C21.2649 15.8262 20.69 15.6139 20.2719 15.5243C20.0934 15.484 19.9108 15.4651 19.7279 15.4678C19.6446 15.47 19.5618 15.48 19.4804 15.4977L19.4697 15.4998L19.4655 15.5019H19.4623L19.6084 16.015L19.4623 15.503C19.3873 15.5242 19.3179 15.5615 19.259 15.6124C19.2 15.6632 19.1529 15.7264 19.1209 15.7974C18.8062 16.5021 18.7463 17.2944 18.9513 18.0385C18.4203 18.682 18.1309 19.491 18.1332 20.3254C18.1332 21.9819 18.6217 23.0955 19.4548 23.8113C20.0383 24.3126 20.7465 24.5793 21.4569 24.7318C21.3452 25.0601 21.303 25.4081 21.3332 25.7537V26.3915C20.8991 26.4822 20.5983 26.4534 20.3839 26.383C20.1161 26.2945 19.9103 26.1163 19.7129 25.8603C19.6098 25.7223 19.5137 25.5792 19.4249 25.4315L19.3641 25.3323C19.2874 25.2047 19.2077 25.0788 19.1252 24.9547C18.9225 24.655 18.6217 24.2795 18.1353 24.1515L17.6191 24.0161L17.3481 25.0486L17.8644 25.1841C17.9497 25.2054 18.0607 25.2854 18.2431 25.5531C18.3133 25.6588 18.3809 25.7662 18.4457 25.8753L18.5183 25.9926C18.6185 26.1547 18.7337 26.3339 18.8671 26.5089C19.1369 26.8609 19.5049 27.2161 20.0511 27.3963C20.4244 27.5201 20.8489 27.5499 21.3332 27.4753V29.4667C21.3332 29.6082 21.3894 29.7438 21.4894 29.8438C21.5894 29.9439 21.7251 30.0001 21.8665 30.0001H26.1332C26.2747 30.0001 26.4103 29.9439 26.5103 29.8438C26.6104 29.7438 26.6665 29.6082 26.6665 29.4667V25.6662C26.6665 25.3302 26.6516 25.0219 26.5567 24.735C27.2639 24.5857 27.9668 24.319 28.5471 23.8177C29.3791 23.0966 29.8665 21.9723 29.8665 20.3062V20.3051C29.8639 19.4776 29.5744 18.6765 29.0473 18.0385C29.2521 17.2947 29.1922 16.5029 28.8777 15.7985C28.846 15.7274 28.7991 15.6641 28.7404 15.613C28.6816 15.562 28.6123 15.5244 28.5375 15.503L28.3913 16.015C28.5375 15.503 28.5364 15.503 28.5353 15.503L28.5332 15.5019L28.5289 15.4998L28.5193 15.4977C28.493 15.4908 28.4663 15.4855 28.4393 15.4817C28.3835 15.4735 28.3272 15.4689 28.2708 15.4678C28.0879 15.4651 27.9053 15.4841 27.7268 15.5243C27.3097 15.6139 26.7348 15.8262 25.9817 16.2881Z" fill="white" />
                    </g>
                    <path transform={`translate(${x}, ${y})`} d="M44.92 26.12C44.04 26.12 43.276 25.94 42.628 25.58C41.98 25.22 41.48 24.716 41.128 24.068C40.776 23.412 40.6 22.64 40.6 21.752C40.6 20.864 40.772 20.084 41.116 19.412C41.468 18.732 41.952 18.2 42.568 17.816C43.192 17.432 43.908 17.24 44.716 17.24C45.348 17.24 45.92 17.36 46.432 17.6C46.952 17.84 47.376 18.172 47.704 18.596C48.04 19.02 48.244 19.512 48.316 20.072H47.332C47.252 19.48 46.976 19.008 46.504 18.656C46.04 18.304 45.456 18.128 44.752 18.128C44.12 18.128 43.568 18.28 43.096 18.584C42.624 18.88 42.256 19.296 41.992 19.832C41.736 20.368 41.608 21 41.608 21.728C41.608 22.456 41.74 23.084 42.004 23.612C42.276 24.132 42.664 24.532 43.168 24.812C43.68 25.092 44.292 25.232 45.004 25.232C45.492 25.232 45.928 25.164 46.312 25.028C46.696 24.884 47.044 24.664 47.356 24.368L48.34 24.728C47.9 25.192 47.392 25.54 46.816 25.772C46.248 26.004 45.616 26.12 44.92 26.12ZM47.356 24.728V21.932L47.728 22.304H44.992V21.44H48.34V24.728H47.356ZM50.1592 26V19.88H51.1192V26H50.1592ZM50.0872 18.488V17.36H51.1912V18.488H50.0872ZM55.4666 26.108C54.7866 26.108 54.2906 25.956 53.9786 25.652C53.6746 25.34 53.5226 24.892 53.5226 24.308V18.452L54.4826 18.092V24.296C54.4826 24.64 54.5706 24.892 54.7466 25.052C54.9226 25.212 55.2106 25.292 55.6106 25.292C55.7706 25.292 55.9066 25.284 56.0186 25.268C56.1386 25.244 56.2346 25.216 56.3066 25.184V26C56.2266 26.032 56.1106 26.056 55.9586 26.072C55.8146 26.096 55.6506 26.108 55.4666 26.108ZM52.2626 20.696V19.88H56.3066V20.696H52.2626ZM57.614 26V17.36H58.598V26H57.614ZM63.398 26V17.36H64.382V26H63.398ZM58.118 21.068H63.83V21.932H58.118V21.068ZM68.37 26.12C67.97 26.12 67.614 26.04 67.302 25.88C66.99 25.712 66.746 25.48 66.57 25.184C66.394 24.88 66.306 24.532 66.306 24.14V19.88H67.266V23.888C67.266 24.352 67.378 24.7 67.602 24.932C67.834 25.164 68.162 25.28 68.586 25.28C68.97 25.28 69.31 25.192 69.606 25.016C69.902 24.84 70.134 24.596 70.302 24.284C70.478 23.964 70.566 23.6 70.566 23.192L70.722 24.644C70.522 25.1 70.21 25.46 69.786 25.724C69.362 25.988 68.89 26.12 68.37 26.12ZM70.626 26V24.56H70.566V19.88H71.526V26H70.626ZM76.4684 26.108C75.8924 26.108 75.4084 25.968 75.0164 25.688C74.6244 25.408 74.3564 25.012 74.2124 24.5L74.3444 24.476V26H73.4444V17.36H74.4044V21.308L74.2724 21.272C74.4244 20.8 74.7004 20.432 75.1004 20.168C75.5084 19.896 75.9924 19.76 76.5524 19.76C77.0964 19.76 77.5684 19.892 77.9684 20.156C78.3764 20.42 78.6924 20.788 78.9164 21.26C79.1404 21.732 79.2524 22.284 79.2524 22.916C79.2524 23.556 79.1364 24.116 78.9044 24.596C78.6724 25.076 78.3484 25.448 77.9324 25.712C77.5164 25.976 77.0284 26.108 76.4684 26.108ZM76.3244 25.268C76.9324 25.268 77.4084 25.06 77.7524 24.644C78.0964 24.22 78.2684 23.644 78.2684 22.916C78.2684 22.196 78.0964 21.632 77.7524 21.224C77.4084 20.808 76.9324 20.6 76.3244 20.6C75.7164 20.6 75.2364 20.812 74.8844 21.236C74.5324 21.652 74.3564 22.224 74.3564 22.952C74.3564 23.664 74.5324 24.228 74.8844 24.644C75.2364 25.06 75.7164 25.268 76.3244 25.268Z" fill="white" />
                    <path transform={`translate(${x}, ${y})`} d="M207.667 21.3333V22.6666H215.667L212 26.3333L212.947 27.28L218.227 22L212.947 16.72L212 17.6666L215.667 21.3333H207.667Z" fill="white" />
                    <defs>
                        <clipPath id="clip0_86_23287">
                            <rect width="16" height="16" fill="white" transform="translate(16 14)" />
                        </clipPath>
                    </defs>
                </>
            )
        case "linkedin":
            return (
                <>
                    <rect width="237" height="44" rx="8" fill="#2D68FF" transform={`translate(${x}, ${y})`} />
                    <path transform={`translate(${x}, ${y})`} d="M28.6667 16C29.0203 16 29.3594 16.1405 29.6095 16.3905C29.8595 16.6406 30 16.9797 30 17.3333V26.6667C30 27.0203 29.8595 27.3594 29.6095 27.6095C29.3594 27.8595 29.0203 28 28.6667 28H19.3333C18.9797 28 18.6406 27.8595 18.3905 27.6095C18.1405 27.3594 18 27.0203 18 26.6667V17.3333C18 16.9797 18.1405 16.6406 18.3905 16.3905C18.6406 16.1405 18.9797 16 19.3333 16H28.6667ZM28.3333 26.3333V22.8C28.3333 22.2236 28.1044 21.6708 27.6968 21.2632C27.2892 20.8556 26.7364 20.6267 26.16 20.6267C25.5933 20.6267 24.9333 20.9733 24.6133 21.4933V20.7533H22.7533V26.3333H24.6133V23.0467C24.6133 22.5333 25.0267 22.1133 25.54 22.1133C25.7875 22.1133 26.0249 22.2117 26.2 22.3867C26.375 22.5617 26.4733 22.7991 26.4733 23.0467V26.3333H28.3333ZM20.5867 19.7067C20.8837 19.7067 21.1686 19.5887 21.3786 19.3786C21.5887 19.1686 21.7067 18.8837 21.7067 18.5867C21.7067 17.9667 21.2067 17.46 20.5867 17.46C20.2879 17.46 20.0013 17.5787 19.79 17.79C19.5787 18.0013 19.46 18.2879 19.46 18.5867C19.46 19.2067 19.9667 19.7067 20.5867 19.7067ZM21.5133 26.3333V20.7533H19.6667V26.3333H21.5133Z" fill="white" />
                    <path transform={`translate(${x}, ${y})`} d="M41.032 26V17.36H42.016V26H41.032ZM41.536 26V25.136H46.456V26H41.536ZM47.6866 26V19.88H48.6466V26H47.6866ZM47.6146 18.488V17.36H48.7186V18.488H47.6146ZM50.5694 26V19.88H51.4694V21.32H51.5294V26H50.5694ZM54.9494 26V21.992C54.9494 21.528 54.8334 21.18 54.6014 20.948C54.3694 20.716 54.0254 20.6 53.5694 20.6C53.1694 20.6 52.8134 20.688 52.5014 20.864C52.1974 21.04 51.9574 21.284 51.7814 21.596C51.6134 21.908 51.5294 22.272 51.5294 22.688L51.3734 21.236C51.5814 20.78 51.8974 20.42 52.3214 20.156C52.7534 19.892 53.2414 19.76 53.7854 19.76C54.4254 19.76 54.9374 19.944 55.3214 20.312C55.7134 20.672 55.9094 21.148 55.9094 21.74V26H54.9494ZM57.753 26V17.12H58.713V26H57.753ZM61.749 26L58.497 22.82L61.629 19.88H62.949L59.433 23.096L59.493 22.532L63.069 26H61.749ZM66.3196 26.12C65.7356 26.12 65.2196 25.984 64.7716 25.712C64.3236 25.432 63.9716 25.052 63.7156 24.572C63.4596 24.092 63.3316 23.54 63.3316 22.916C63.3316 22.292 63.4556 21.744 63.7036 21.272C63.9596 20.792 64.3156 20.42 64.7716 20.156C65.2276 19.892 65.7516 19.76 66.3436 19.76C66.9116 19.76 67.4036 19.884 67.8196 20.132C68.2436 20.38 68.5676 20.728 68.7916 21.176C69.0236 21.624 69.1396 22.152 69.1396 22.76C69.1396 22.84 69.1356 22.916 69.1276 22.988C69.1276 23.06 69.1196 23.14 69.1036 23.228H64.0516V22.424H68.5156L68.2036 22.868C68.2036 22.132 68.0396 21.568 67.7116 21.176C67.3916 20.776 66.9356 20.576 66.3436 20.576C65.7356 20.576 65.2436 20.788 64.8676 21.212C64.4996 21.628 64.3156 22.192 64.3156 22.904C64.3156 23.632 64.4996 24.216 64.8676 24.656C65.2436 25.088 65.7436 25.304 66.3676 25.304C66.7596 25.304 67.1036 25.22 67.3996 25.052C67.6956 24.876 67.9116 24.628 68.0476 24.308H68.9596C68.7596 24.868 68.4236 25.312 67.9516 25.64C67.4876 25.96 66.9436 26.12 66.3196 26.12ZM75.037 26V24.572L75.157 24.608C75.005 25.072 74.725 25.44 74.317 25.712C73.917 25.984 73.437 26.12 72.877 26.12C72.325 26.12 71.841 25.988 71.425 25.724C71.017 25.46 70.697 25.092 70.465 24.62C70.241 24.148 70.129 23.596 70.129 22.964C70.129 22.324 70.245 21.764 70.477 21.284C70.709 20.804 71.033 20.432 71.449 20.168C71.865 19.904 72.353 19.772 72.913 19.772C73.489 19.772 73.973 19.912 74.365 20.192C74.757 20.472 75.025 20.868 75.169 21.38L74.977 21.404V17.36H75.937V26H75.037ZM73.057 25.28C73.673 25.28 74.153 25.072 74.497 24.656C74.849 24.232 75.025 23.656 75.025 22.928C75.025 22.216 74.849 21.652 74.497 21.236C74.145 20.82 73.665 20.612 73.057 20.612C72.449 20.612 71.973 20.82 71.629 21.236C71.285 21.652 71.113 22.228 71.113 22.964C71.113 23.684 71.285 24.252 71.629 24.668C71.973 25.076 72.449 25.28 73.057 25.28ZM77.9343 26V17.36H78.9183V26H77.9343ZM80.9092 26V19.88H81.8092V21.32H81.8692V26H80.9092ZM85.2892 26V21.992C85.2892 21.528 85.1732 21.18 84.9412 20.948C84.7092 20.716 84.3652 20.6 83.9092 20.6C83.5092 20.6 83.1532 20.688 82.8412 20.864C82.5372 21.04 82.2972 21.284 82.1212 21.596C81.9532 21.908 81.8692 22.272 81.8692 22.688L81.7132 21.236C81.9212 20.78 82.2372 20.42 82.6612 20.156C83.0932 19.892 83.5812 19.76 84.1252 19.76C84.7652 19.76 85.2772 19.944 85.6612 20.312C86.0532 20.672 86.2492 21.148 86.2492 21.74V26H85.2892Z" fill="white" />
                    <path transform={`translate(${x}, ${y})`} d="M207.667 21.3333V22.6666H215.667L212 26.3333L212.947 27.28L218.227 22L212.947 16.72L212 17.6666L215.667 21.3333H207.667Z" fill="white" />
                </>
            )
        case "youtube":
            return (
                <>
                    <rect width="237" height="44" rx="8" fill="#EE3939" transform={`translate(${x}, ${y})`} />
                    <path d="M24.1626 16.6666C24.5186 16.6686 25.4093 16.6773 26.356 16.7153L26.692 16.73C27.6446 16.7746 28.5966 16.852 29.0693 16.9833C29.6993 17.1606 30.194 17.6766 30.3613 18.3313C30.628 19.3713 30.6613 21.3993 30.6653 21.8906L30.666 21.992V22.108C30.6613 22.5993 30.628 24.628 30.3613 25.6673C30.192 26.324 29.6966 26.8406 29.0693 27.0153C28.5966 27.1466 27.6446 27.224 26.692 27.2686L26.356 27.284C25.4093 27.3213 24.5186 27.3306 24.1626 27.332L24.006 27.3326H23.836C23.0826 27.328 19.932 27.294 18.9293 27.0153C18.3 26.838 17.8046 26.322 17.6373 25.6673C17.3706 24.6273 17.3373 22.5993 17.3333 22.108V21.8906C17.3373 21.3993 17.3706 19.3706 17.6373 18.3313C17.8066 17.6746 18.302 17.158 18.93 16.984C19.932 16.7046 23.0833 16.6706 23.8366 16.6666H24.1626ZM22.666 19.6666V24.3333L26.666 22L22.666 19.6666Z" fill="white" transform={`translate(${x}, ${y})`} />
                    <path d="M43.564 26V22.088L40.288 17.36H41.488L44.332 21.512H43.876L46.72 17.36H47.824L44.548 22.088V26H43.564ZM50.4532 26.12C49.8532 26.12 49.3252 25.98 48.8692 25.7C48.4132 25.42 48.0572 25.04 47.8012 24.56C47.5532 24.072 47.4292 23.524 47.4292 22.916C47.4292 22.3 47.5572 21.756 47.8132 21.284C48.0692 20.812 48.4212 20.44 48.8692 20.168C49.3252 19.896 49.8532 19.76 50.4532 19.76C51.0612 19.76 51.5892 19.896 52.0372 20.168C52.4932 20.44 52.8452 20.812 53.0932 21.284C53.3492 21.756 53.4772 22.3 53.4772 22.916C53.4772 23.524 53.3492 24.072 53.0932 24.56C52.8452 25.04 52.4932 25.42 52.0372 25.7C51.5892 25.98 51.0612 26.12 50.4532 26.12ZM50.4532 25.304C50.8692 25.304 51.2292 25.204 51.5332 25.004C51.8372 24.796 52.0732 24.512 52.2412 24.152C52.4092 23.792 52.4932 23.376 52.4932 22.904C52.4932 22.2 52.3052 21.636 51.9292 21.212C51.5612 20.788 51.0692 20.576 50.4532 20.576C49.8452 20.576 49.3532 20.788 48.9772 21.212C48.6012 21.636 48.4132 22.2 48.4132 22.904C48.4132 23.376 48.4972 23.792 48.6652 24.152C48.8332 24.512 49.0692 24.796 49.3732 25.004C49.6852 25.204 50.0452 25.304 50.4532 25.304ZM56.909 26.12C56.509 26.12 56.153 26.04 55.841 25.88C55.529 25.712 55.285 25.48 55.109 25.184C54.933 24.88 54.845 24.532 54.845 24.14V19.88H55.805V23.888C55.805 24.352 55.917 24.7 56.141 24.932C56.373 25.164 56.701 25.28 57.125 25.28C57.509 25.28 57.849 25.192 58.145 25.016C58.441 24.84 58.673 24.596 58.841 24.284C59.017 23.964 59.105 23.6 59.105 23.192L59.261 24.644C59.061 25.1 58.749 25.46 58.325 25.724C57.901 25.988 57.429 26.12 56.909 26.12ZM59.165 26V24.56H59.105V19.88H60.065V26H59.165ZM63.2827 26V18.224H60.3187V17.36H67.2307V18.224H64.2667V26H63.2827ZM69.495 26.12C69.095 26.12 68.739 26.04 68.427 25.88C68.115 25.712 67.871 25.48 67.695 25.184C67.519 24.88 67.431 24.532 67.431 24.14V19.88H68.391V23.888C68.391 24.352 68.503 24.7 68.727 24.932C68.959 25.164 69.287 25.28 69.711 25.28C70.095 25.28 70.435 25.192 70.731 25.016C71.027 24.84 71.259 24.596 71.427 24.284C71.603 23.964 71.691 23.6 71.691 23.192L71.847 24.644C71.647 25.1 71.335 25.46 70.911 25.724C70.487 25.988 70.015 26.12 69.495 26.12ZM71.751 26V24.56H71.691V19.88H72.651V26H71.751ZM77.5934 26.108C77.0174 26.108 76.5334 25.968 76.1414 25.688C75.7494 25.408 75.4814 25.012 75.3374 24.5L75.4694 24.476V26H74.5694V17.36H75.5294V21.308L75.3974 21.272C75.5494 20.8 75.8254 20.432 76.2254 20.168C76.6334 19.896 77.1174 19.76 77.6774 19.76C78.2214 19.76 78.6934 19.892 79.0934 20.156C79.5014 20.42 79.8174 20.788 80.0414 21.26C80.2654 21.732 80.3774 22.284 80.3774 22.916C80.3774 23.556 80.2614 24.116 80.0294 24.596C79.7974 25.076 79.4734 25.448 79.0574 25.712C78.6414 25.976 78.1534 26.108 77.5934 26.108ZM77.4494 25.268C78.0574 25.268 78.5334 25.06 78.8774 24.644C79.2214 24.22 79.3934 23.644 79.3934 22.916C79.3934 22.196 79.2214 21.632 78.8774 21.224C78.5334 20.808 78.0574 20.6 77.4494 20.6C76.8414 20.6 76.3614 20.812 76.0094 21.236C75.6574 21.652 75.4814 22.224 75.4814 22.952C75.4814 23.664 75.6574 24.228 76.0094 24.644C76.3614 25.06 76.8414 25.268 77.4494 25.268ZM84.3547 26.12C83.7707 26.12 83.2547 25.984 82.8067 25.712C82.3587 25.432 82.0067 25.052 81.7507 24.572C81.4947 24.092 81.3667 23.54 81.3667 22.916C81.3667 22.292 81.4907 21.744 81.7387 21.272C81.9947 20.792 82.3507 20.42 82.8067 20.156C83.2627 19.892 83.7867 19.76 84.3787 19.76C84.9467 19.76 85.4387 19.884 85.8547 20.132C86.2787 20.38 86.6027 20.728 86.8267 21.176C87.0587 21.624 87.1747 22.152 87.1747 22.76C87.1747 22.84 87.1707 22.916 87.1627 22.988C87.1627 23.06 87.1547 23.14 87.1387 23.228H82.0867V22.424H86.5507L86.2387 22.868C86.2387 22.132 86.0747 21.568 85.7467 21.176C85.4267 20.776 84.9707 20.576 84.3787 20.576C83.7707 20.576 83.2787 20.788 82.9027 21.212C82.5347 21.628 82.3507 22.192 82.3507 22.904C82.3507 23.632 82.5347 24.216 82.9027 24.656C83.2787 25.088 83.7787 25.304 84.4027 25.304C84.7947 25.304 85.1387 25.22 85.4347 25.052C85.7307 24.876 85.9467 24.628 86.0827 24.308H86.9947C86.7947 24.868 86.4587 25.312 85.9867 25.64C85.5227 25.96 84.9787 26.12 84.3547 26.12Z" fill="white" transform={`translate(${x}, ${y})`} />
                    <path d="M207.667 21.3333V22.6666H215.667L212 26.3333L212.947 27.28L218.227 22L212.947 16.72L212 17.6666L215.667 21.3333H207.667Z" fill="white" transform={`translate(${x}, ${y})`} />
                </>
            )
        case "facebook":
            return (
                <>
                    <rect width="237" height="44" rx="8" fill="#2442AC" transform={`translate(${x}, ${y})`} />
                    <path width="16" height="16" transform={`translate(${x}, ${y})`} d="M35.9996 28.061C35.9996 22.5035 31.5221 17.9985 25.9996 17.9985C20.4746 17.9998 15.9971 22.5035 15.9971 28.0623C15.9971 33.0835 19.6546 37.246 24.4346 38.001V30.9698H21.8971V28.0623H24.4371V25.8435C24.4371 23.3223 25.9308 21.9298 28.2146 21.9298C29.3096 21.9298 30.4533 22.126 30.4533 22.126V24.601H29.1921C27.9508 24.601 27.5633 25.3773 27.5633 26.1735V28.061H30.3358L29.8933 30.9685H27.5621V37.9998C32.3421 37.2448 35.9996 33.0823 35.9996 28.061Z" fill="white" />
                </>
            )
        case "twitch":
            return (
                <>
                    <rect width="237" height="44" rx="8" fill="#EE3FC8" transform={`translate(${x}, ${y})`} />
                    <path width="14" height="14" transform={`translate(48, ${Number(y) + 12})`} d="M9.70007 4.9415H10.8917V8.50817H9.70007M12.9751 4.9415H14.1667V8.50817H12.9751M5.8334 1.6665L2.8584 4.6415V15.3582H6.42506V18.3332L9.4084 15.3582H11.7834L17.1417 9.99984V1.6665M15.9501 9.40817L13.5751 11.7832H11.1917L9.1084 13.8665V11.7832H6.42506V2.85817H15.9501V9.40817Z" fill="white" />
                    <text style={{ fontSize: "12px", fontFamily: "Instrument Sans" }} transform={`translate(76, ${Number(y) + 25})`} fill="white">Twitch</text>
                    <path transform={`translate(${x}, ${y})`} d="M207.667 21.3333V22.6666H215.667L212 26.3333L212.947 27.28L218.227 22L212.947 16.72L212 17.6666L215.667 21.3333H207.667Z" fill="white" />
                </>
            )
        case "gitlab":
            return (
                <>
                    <rect width="237" height="44" rx="8" fill="#EB4925" transform={`translate(${x}, ${y})`} />
                    <path width="14" height="14" transform={`translate(48, ${Number(y) + 12})`} d="M18.0529 8.32265L18.0295 8.26265L15.7637 2.35098C15.7179 2.23435 15.6362 2.13528 15.5305 2.06803C15.4248 2.00079 15.3004 1.96885 15.1754 1.97682C15.0502 1.98239 14.93 2.02749 14.8321 2.10565C14.7342 2.18381 14.6635 2.291 14.6304 2.41182L13.1004 7.10015H6.90203L5.36953 2.41265C5.33673 2.29178 5.26649 2.18442 5.16887 2.10596C5.07125 2.02751 4.95129 1.98201 4.82619 1.97598C4.70114 1.96918 4.57709 2.00168 4.47143 2.06893C4.36577 2.13618 4.28381 2.23481 4.23703 2.35098L1.96869 8.27098L1.94536 8.32932C1.6197 9.18193 1.57965 10.1172 1.83122 10.9945C2.08278 11.8719 2.61238 12.6438 3.34036 13.1943L3.34869 13.2002L3.36869 13.216L6.82453 15.8027L8.53286 17.0968L9.57203 17.8835C9.69396 17.9756 9.84258 18.0254 9.99536 18.0254C10.1481 18.0254 10.2968 17.9756 10.4187 17.8835L11.4579 17.0968L13.1662 15.8027L16.6429 13.2002L16.6512 13.1935C17.3818 12.6437 17.9137 11.8711 18.1665 10.9925C18.4194 10.1138 18.3795 9.17667 18.0529 8.32265Z" fill="white" />
                    <text style={{ fontSize: "12px", fontFamily: "Instrument Sans" }} transform={`translate(76, ${Number(y) + 25})`} fill="white">GitLab</text>
                    <path transform={`translate(${x}, ${y})`} d="M207.667 21.3333V22.6666H215.667L212 26.3333L212.947 27.28L218.227 22L212.947 16.72L212 17.6666L215.667 21.3333H207.667Z" fill="white" />
                </>
            )
        case "stackoverflow":
            return (
                <>
                    <rect width="237" height="44" rx="8" fill="#EC7100" transform={`translate(${x}, ${y})`} />
                    <path width="14" height="14" transform={`translate(48, ${Number(y) + 11})`} d="M15.8199 18.2194V12.8844H17.6005V20H1.53613V12.8844H3.31051V18.2194H15.8199ZM5.09051 16.4419H14.043V14.6619H5.09051V16.4419ZM5.30926 12.3994L14.0436 14.2219L14.418 12.4969L5.68738 10.6769L5.30926 12.3994ZM6.44176 8.18688L14.5286 11.96L15.2805 10.335L7.19488 6.55937L6.44238 8.17438L6.44176 8.18688ZM8.70426 4.19938L15.5499 9.9125L16.683 8.56063L9.83738 2.85125L8.71051 4.19562L8.70426 4.19938ZM13.1249 0L11.6699 1.0775L17.008 8.24813L18.463 7.17062L13.1249 0Z" fill="white" />
                    <text style={{ fontSize: "12px", fontFamily: "Instrument Sans" }} transform={`translate(76, ${Number(y) + 24})`} fill="white">StackOverFlow</text>
                    <path transform={`translate(${x}, ${y})`} d="M207.667 21.3333V22.6666H215.667L212 26.3333L212.947 27.28L218.227 22L212.947 16.72L212 17.6666L215.667 21.3333H207.667Z" fill="white" />
                </>
            )
        default:
            return (
                <>
                    <rect width="237" height="44" rx="8" fill="#EE3FC8" transform={`translate(${x}, ${y})`} />
                    <path transform={`translate(${x}, ${y})`} d="M207.667 21.3333V22.6666H215.667L212 26.3333L212.947 27.28L218.227 22L212.947 16.72L212 17.6666L215.667 21.3333H207.667Z" fill="white" />
                </>
            )
    }
}

export default PreviewLinksComponent