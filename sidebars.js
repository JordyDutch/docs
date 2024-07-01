/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  networksSidebar: [{ type: 'autogenerated', dirName: 'networks' }],
  standardsSidebar: [{ type: 'autogenerated', dirName: 'standards' }],
  learnSidebar: [
    'learn/getting-started',
    'learn/introduction',
    'learn/migrate-to-lukso',
    'learn/concepts',
    { type: 'html', value: '<hr/>', defaultStyle: false }, // -----
    {
      type: 'category',
      label: '🆙 Universal Profile',
      items: [
        {
          type: 'autogenerated',
          dirName: 'learn/universal-profile',
        },
      ],
    },
    {
      type: 'category',
      label: '🖼️ Tokens & NFTs (LSP7/8)',
      items: [
        {
          type: 'autogenerated',
          dirName: 'learn/digital-assets',
        },
      ],
    },
    { type: 'html', value: '<hr/>', defaultStyle: false }, // -----

    // Hide Vault guides for now, as LSP9 standard is still draft and will be re-worked
    // {
    //   type: 'category',
    //   label: '🔑 Vault',
    //   items: [
    //     {
    //       type: 'autogenerated',
    //       dirName: 'learn/vault',
    //     },
    //   ],
    // },
    {
      type: 'category',
      label: '🧙🏻 Other Guides',
      items: [
        {
          type: 'autogenerated',
          dirName: 'learn/other-guides',
        },
      ],
    },
    'learn/standard-detection',
  ],
  contractsSidebar: [
    'contracts/introduction',
    'contracts/deployed-contracts',
    // divider for the main smart contracts
    { type: 'html', value: '<hr/>', defaultStyle: false },
    {
      type: 'category',
      label: 'Smart Contracts',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'contracts/overview',
        },
      ],
    },
    // divider for the Contracts ABI and Libraries Technical references
    { type: 'html', value: '<hr/>', defaultStyle: false },
    {
      type: 'category',
      label: '📑 ABI Technical Reference',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'contracts/contracts',
        },
      ],
    },
    {
      type: 'category',
      label: '📒 Solidity Libraries',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'contracts/libraries',
        },
      ],
    },
    // divider for the Libraries Technical references
    { type: 'html', value: '<hr/>', defaultStyle: false },
    'contracts/interface-ids',
    'contracts/type-ids',
    {
      type: 'link',
      label: 'Audits',
      href: 'https://github.com/lukso-network/lsp-smart-contracts/tree/develop/audits',
    },
  ],
  toolsSidebar: [
    'tools/getting-started',
    'tools/integrations',
    {
      type: 'category',
      label: '📜 erc725.js',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'tools/erc725js',
        },
      ],
    },
    {
      type: 'category',
      label: '🖋️ eip191-signer.js',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'tools/eip191-signerjs',
        },
      ],
    },
    {
      type: 'category',
      label: '📑 lsp-smart-contracts',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'tools/lsp-smart-contracts',
        },
      ],
    },
    {
      type: 'category',
      label: '📑 lsp-utils',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'tools/lsp-utils',
        },
      ],
    },
    {
      type: 'category',
      label: '🏭 lsp-factory.js (deprecated)',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'tools/lsp-factoryjs',
        },
      ],
    },
    'tools/erc725-tools',
    'tools/relayer-developer',
    'tools/indexer',
    'tools/docker-factory',
  ],
  faqSidebar: [{ type: 'autogenerated', dirName: 'faq' }],
};
