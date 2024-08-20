import { getConfig } from "@/utils/getConfig";
import { RenderButton } from "./components/RenderButton";
import { ThemeSwitch } from "./components/ThemeSwitch";

export default async function Home() {
  const config = await getConfig();
  return (
    <>
      <div className="bg-neutral-100 dark:bg-neutral-900 min-h-screen flex flex-col justify-between">
        {/* Navbar */}
        <nav className="bg-neutral-200 dark:bg-neutral-800 p-5 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex-1 text-center">
              <p className="text-2xl font-bold">Button Box</p>
            </div>
            <ThemeSwitch />
          </div>
        </nav>

        {/* Button Grid */}
        <div className="flex-grow grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 p-5">
          {config?.buttons.length !== 0 ? (
            config?.buttons.map((button) => (
              <RenderButton
                key={button.name.replace(" ", "-").toLowerCase()}
                name={button.name}
                description={button.description}
                icon={button.icon}
              ></RenderButton>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-6 bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-lg max-w-lg mx-auto">
              <p className="text-xl font-semibold text-neutral-900 dark:text-neutral-200 mb-4">
                No hay botones configurados.
              </p>
              <p className="text-lg text-neutral-700 dark:text-neutral-400 mb-4">
                Por favor, añade botones creando un archivo llamado <span className="font-bold">config.yml</span> en la carpeta <span className="font-bold">data</span>.
              </p>
              <p className="text-lg text-neutral-700 dark:text-neutral-400">
                Se añaden con la siguiente estructura:
              </p>
              <pre className="bg-neutral-200 dark:bg-neutral-900 text-left p-4 rounded-md text-sm text-neutral-800 dark:text-neutral-300 mt-2 w-full">
                buttons:
                <br /> &nbsp; - name: Nombre Boton
                <br /> &nbsp; &nbsp; icon: Icono Boton
                <br /> &nbsp; &nbsp; description: Descripcion boton
                <br /> &nbsp; &nbsp; command: Comando boton
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="bg-neutral-200 dark:bg-neutral-800 p-4 text-center">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Hecho con ❤️ por{" "}
            <a
              href="https://github.com/enriquetecfan11"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-800 dark:text-neutral-200 font-bold"
            >
              Enrique Rodriguez Vela
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}
