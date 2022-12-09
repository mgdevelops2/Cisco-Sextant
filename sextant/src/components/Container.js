function Container() {
  return (
    <section class="bg-gray-900 text-white">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-lg text-center">
          <h2 class="text-3xl font-bold sm:text-4xl">Network Dashboard </h2>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-indigo-500/10 hover:shadow-indigo-500/10"
            href="/services/digital-campaigns"
          >
            <h2 class="mt-4 text-xl font-bold text-white">Digital campaigns</h2>
            <p class="mt-1 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
            </p>
          </a>

          <a
            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-indigo-500/10 hover:shadow-indigo-500/10"
            href="/services/digital-campaigns"
          >
            <h2 class="mt-4 text-xl font-bold text-white">Digital campaigns</h2>
            <p class="mt-1 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
            </p>
          </a>

          <a
            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-indigo-500/10 hover:shadow-indigo-500/10"
            href="/services/digital-campaigns"
          >
            <h2 class="mt-4 text-xl font-bold text-white">Digital campaigns</h2>
            <p class="mt-1 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
            </p>
          </a>
        </div>

        {/* this is the get started button at the bottom of the page */}
        {/* <div class="mt-12 text-center">
          <a
            href="#"
            class="mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent focus:outline-none focus:ring active:text-indigo-500"
          >
            <span class="text-sm font-medium"> Get Started </span>
          </a>
        </div> */}
      </div>
    </section>
  );
}

export default Container;
