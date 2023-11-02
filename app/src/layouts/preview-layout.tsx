import PreviewPhoneProfileComponent from '../components/preview-phone-profile-component'

function PreviewLayout() {
    
    document.getElementById("github")?.addEventListener('click', function () {
        window.open("https://github.com/slisandro", '_blank')
    })

    return (
        <section>
            <PreviewPhoneProfileComponent />
        </section>
    )
}

export default PreviewLayout