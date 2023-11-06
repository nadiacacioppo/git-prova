import CacioppoButton from "../components/CacioppoButton";
import LogoCacioppo from "../components/cacioppo/Logo";

const PageCacioppo = () => {
    return (
        <>
            <h3>Nadia Cacioppo</h3>
            <p>Basta fare un merge.</p>
            <LogoCacioppo />
            <p>Ho creato una nuova branch chiamata BranchCacioppo e ho fatto il merge di master, dopo di che ho fatto il reset di master riportandola alla commit precedente.</p>
            <p>Tartine al salmone</p>
            <p>Pasta al pesto</p>
            <p>Parmigiana di melanzane</p>
            <p>Tiramisù</p>
            <p>Per unire molti commit, bisognare fare la rebase -i della branch e sostituire pick a squash dei commit che ci interessano.</p>
            <p>Laura Pausini</p>
            <p>Kevin Hart</p>
            <p>Paulo Dybala</p>
            <p>Bisogna fare il rebase -i e poi fare il merge. Non saprei se si può fare con una pull request.</p>
            <CacioppoButton />
            <p>Si può "riavvolgere il tempo" con il comando git rebase nomebranch.</p>
            <p>Nadia</p>
        </>
    )
  };
  
  export default PageCacioppo;