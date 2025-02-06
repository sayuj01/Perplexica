          <a
            href="https://github.com/ItzCrazyKns/Perplexica"
            className="flex items-center gap-3 px-4 py-2 text-white transition-colors duration-300 bg-brand rounded-xl hover:bg-[#6a6970] focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"
          >
            <FaGithub />
            Star on GitHub
          </a>
        </div>
      </div>

      <div className="hidden lg:flex">
        {/* [Genie] Add a div container with flex layout containing two anchor links styled as buttons for "Focus Modes" and "History", along with a theme toggle switch input element. */}
        <div className="flex gap-3 items-center">
          <a
              href="/focusModes"
              className="text-gray-800 hover:bg-gray-100 focus:bg-gray-200 px-4 py-2 rounded-md transition-colors duration-300"
          >
            Focus Modes
          </a>
          <a
              href="/history"
              className="text-gray-800 hover:bg-gray-100 focus:bg-gray-200 px-4 py-2 rounded-md transition-colors duration-300"
          >
            History
          </a>
        </div>

        <input
            type="checkbox"
            id="theme-toggle"
            name="theme-toggle"
            aria-label="Toggle Light/Dark Theme"
            className="relative w-[54px] h-[28px] appearance-none bg-gray-300 rounded-full cursor-pointer transition duration-[0.3s] shadow-[inset_0_0_15px_rgba(0,0,0,.2)] checked:bg-[#48e1c7]"
        />

      </div>

      <div className="flex items-center h-full max-w-[120px]">
        {/* [Genie] Add a hidden lg:block div containing an anchor link with styling classes for GitHub icon display. */}
        <div className="hidden lg:block">
          <a
              href="https://github.com/ItzCrazyKns/Perplexica"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white h-full px-[10px]"
            >
              <FaGithub size={24} />
            </a>
        </div>
      </div>
    </header>
  );
};

export default WebsiteHeader;
